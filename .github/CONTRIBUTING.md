# Contributing to Astro Rocket

Thank you for your interest in contributing. Astro Rocket is a free, open-source Astro 6 starter theme — every improvement, however small, makes it better for everyone who builds with it.

## Ways to contribute

- **Report a bug** — something broken or behaving unexpectedly
- **Suggest a feature** — an idea for a new component, page, or configuration option
- **Fix a bug** — pick up an open issue and submit a pull request
- **Improve documentation** — fix a typo, clarify an instruction, or improve an example
- **Improve accessibility** — help make the theme usable for everyone

## Before you start

- Check the [open issues](https://github.com/hansmartens68/Astro-Rocket/issues) to avoid duplicating work
- For significant changes, open an issue first to discuss the approach before writing code
- All contributions are released under the [MIT License](../LICENSE)

## Development setup

**Prerequisites:** Node.js ≥ 22.12.0 and pnpm

```bash
# Fork and clone the repo
git clone https://github.com/YOUR_USERNAME/Astro-Rocket.git
cd Astro-Rocket

# Copy the environment file
cp .env.example .env

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

## Branch naming

| Type | Pattern | Example |
|---|---|---|
| New feature | `feature/short-description` | `feature/add-breadcrumbs` |
| Bug fix | `fix/short-description` | `fix/mobile-nav-overflow` |
| Content or config | `update/short-description` | `update/readme-installation` |

Always branch from `main`.

## Before submitting a pull request

All three checks must pass with zero errors:

```bash
pnpm lint    # ESLint
pnpm check   # Astro type checking
pnpm build   # Production build
```

If any check fails, fix the errors before opening the PR. The CI workflow runs the same checks automatically.

## Commit messages

Write clear, specific commit messages that describe what changed and why.

```
# Good
Add keyboard navigation to theme selector dropdown
Fix contact form validation on mobile Safari
Update installation docs to reflect pnpm lockfile requirement

# Too vague
fix
update
changes
```

## Pull request guidelines

- Keep pull requests focused — one concern per PR
- Reference the issue number if applicable: `Fixes #42`
- Fill in the PR description template — describe what changed, why, and how to test it
- Be responsive to review feedback

## Code style

- TypeScript is required for all `.astro` and `.ts` files
- Tailwind utility classes follow the existing ordering conventions
- No inline styles unless unavoidable
- Components go in `src/components/`, pages in `src/pages/`, layouts in `src/layouts/`
- Follow the existing file and folder naming conventions

## Questions

Open a [GitHub Discussion](https://github.com/hansmartens68/Astro-Rocket/discussions) or reach out on X at [@hansmartens_dev](https://x.com/hansmartens_dev).
