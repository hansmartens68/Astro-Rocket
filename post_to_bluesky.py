"""
Post 4 blog posts to Bluesky with images and hashtags.
Usage: python3 post_to_bluesky.py

Requires:
  pip install cairosvg atproto

Set credentials via environment variables or edit the constants below.
"""

import os
import cairosvg
from atproto import Client, models

HANDLE = os.getenv("BSKY_HANDLE", "hansmartens-online.bsky.social")
APP_PASSWORD = os.getenv("BSKY_APP_PASSWORD", "YOUR_APP_PASSWORD_HERE")
BASE_URL = "https://hansmartens.dev/blog/en"

# Adjust this path to wherever your project lives
ASSETS = os.path.join(os.path.dirname(__file__), "src/assets/blog")

posts = [
    {
        "slug": "using-claude-ai-for-web-design-and-development",
        "title": "How I Use Claude AI for Web Design and Development",
        "description": "Discover how I use Claude AI to build faster, better websites — what it can do, which model to pick, and the difference between Claude Sonnet and Opus.",
        "image": f"{ASSETS}/claude-ai-web-design.svg",
        "hashtags": ["AI", "Claude", "WebDevelopment", "WebDesign", "Productivity"],
    },
    {
        "slug": "why-i-build-with-astro",
        "title": "Why I Build Every Website with Astro",
        "description": "I'm genuinely enthusiastic about Astro — here's why I chose it, how it works, and why I use it for every website I build.",
        "image": f"{ASSETS}/why-i-build-with-astro-v3.svg",
        "hashtags": ["Astro", "WebDevelopment", "Performance", "StaticSites"],
    },
    {
        "slug": "domain-email-vercel-setup",
        "title": "How I Set Up My Domain, Email, and Hosting",
        "description": "Buying hansmartens.dev at GoDaddy, adding a Microsoft 365 mailbox, pointing the domain to Vercel — a walkthrough of the full setup.",
        "image": f"{ASSETS}/domain-email-vercel-setup-v2.svg",
        "hashtags": ["WebDevelopment", "Vercel", "GoDaddy", "Domain", "Tutorial"],
    },
    {
        "slug": "dark-mode-sessionstorage",
        "title": "Why I Use sessionStorage for Dark Mode (Not localStorage)",
        "description": "Dark mode is the default on my site — and I store the preference in sessionStorage instead of localStorage. Here's the reasoning.",
        "image": f"{ASSETS}/dark-mode-sessionstorage.svg",
        "hashtags": ["WebDevelopment", "DarkMode", "CSS", "Performance"],
    },
]


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

    print("\nAll 4 posts published!")


if __name__ == "__main__":
    main()
