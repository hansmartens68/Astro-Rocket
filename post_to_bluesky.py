"""
Post blog posts to Bluesky with images and hashtags.
Usage: python3 post_to_bluesky.py

Requires:
  pip install cairosvg atproto

Set credentials via environment variables:
  BSKY_HANDLE       — your Bluesky handle (e.g. yourname.bsky.social)
  BSKY_APP_PASSWORD — your Bluesky app password (create one at bsky.app/settings)
  SITE_BASE_URL     — your blog's base URL (e.g. https://yoursite.com/blog/en)

Customize the `posts` list below with your own blog posts before running.
"""

import os
import sys
import cairosvg
from atproto import Client, models

HANDLE = os.getenv("BSKY_HANDLE")
APP_PASSWORD = os.getenv("BSKY_APP_PASSWORD")
BASE_URL = os.getenv("SITE_BASE_URL")

if not HANDLE or not APP_PASSWORD or not BASE_URL:
    print("Error: BSKY_HANDLE, BSKY_APP_PASSWORD, and SITE_BASE_URL must all be set as environment variables.")
    sys.exit(1)

# Adjust this path to wherever your project lives
ASSETS = os.path.join(os.path.dirname(__file__), "src/assets/blog")

# ---- Customize this list with your own blog posts ----
posts = [
    # {
    #     "slug": "your-post-slug",
    #     "title": "Your Post Title",
    #     "description": "A short description of your post.",
    #     "image": f"{ASSETS}/your-post-image.svg",
    #     "hashtags": ["Tag1", "Tag2", "Tag3"],
    # },
]
# ------------------------------------------------------


def svg_to_png_bytes(path: str) -> bytes:
    return cairosvg.svg2png(url=path, output_width=1200)


def build_post_text(post: dict) -> str:
    url = f"{BASE_URL}/{post['slug']}"
    tags_str = " ".join(f"#{t}" for t in post["hashtags"])
    return f"{post['title']}\n\n{post['description']}\n\n{url}\n\n{tags_str}"


def create_facets(text: str, hashtags: list[str], url: str) -> list:
    facets = []

    # URL facet
    url_start = text.find(url)
    if url_start != -1:
        url_end = url_start + len(url)
        facets.append(
            models.AppBskyRichtextFacet.Main(
                index=models.AppBskyRichtextFacet.ByteSlice(
                    byte_start=len(text[:url_start].encode("utf-8")),
                    byte_end=len(text[:url_end].encode("utf-8")),
                ),
                features=[models.AppBskyRichtextFacet.Link(uri=url)],
            )
        )

    # Hashtag facets
    for tag in hashtags:
        needle = f"#{tag}"
        pos = text.find(needle)
        while pos != -1:
            end = pos + len(needle)
            facets.append(
                models.AppBskyRichtextFacet.Main(
                    index=models.AppBskyRichtextFacet.ByteSlice(
                        byte_start=len(text[:pos].encode("utf-8")),
                        byte_end=len(text[:end].encode("utf-8")),
                    ),
                    features=[models.AppBskyRichtextFacet.Tag(tag=tag)],
                )
            )
            pos = text.find(needle, end)

    return facets


def main():
    if not posts:
        print("No posts configured. Edit the `posts` list in this script before running.")
        sys.exit(1)

    client = Client()
    client.login(HANDLE, APP_PASSWORD)
    print("Logged in successfully")

    for post in posts:
        print(f"\nPosting: {post['title']}")

        png_bytes = svg_to_png_bytes(post["image"])
        blob = client.upload_blob(png_bytes)
        print(f"  Image uploaded ({len(png_bytes) // 1024}KB)")

        url = f"{BASE_URL}/{post['slug']}"
        text = build_post_text(post)
        facets = create_facets(text, post["hashtags"], url)

        embed = models.AppBskyEmbedImages.Main(
            images=[
                models.AppBskyEmbedImages.Image(
                    image=blob.blob,
                    alt=post["title"],
                )
            ]
        )

        response = client.send_post(text=text, facets=facets, embed=embed)
        print(f"  Posted! URI: {response.uri}")

    print(f"\nAll {len(posts)} post(s) published!")


if __name__ == "__main__":
    main()
