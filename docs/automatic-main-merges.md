# Automatic updates to main

Pushing a branch that contains `.github/workflows/auto-merge-main.yml` automatically attempts to merge it into `main`. New branches should start from the latest `main`; older branches need to merge `main` once to receive the workflow. Pull requests and manual approval are not required.

The action prepares a merge with the current `main`, then runs `npm ci`, ESLint with zero warnings, TypeScript, and the same production build used by Vercel. Only the tested merge is pushed. There is no separate test suite configured in this repository.

Merge conflicts, installation errors, lint/type errors, or build failures stop publication. If another branch updates `main` during validation, the normal push is rejected. After resolving any errors, push another commit or rerun the workflow from the Actions page. The workflow can also be run manually with **Run workflow**, selecting the source branch.

Each branch push opts that branch into automatic publication, including work in progress. Use local commits until changes are ready to go live. Avoid pushing secrets or unfinished work.

The action does not wait for human reviews or checks from other services. Vercel's production deployment runs after the merge and can still fail for deployment-specific reasons. Monitor its deployment status separately. GitHub Actions failures are shown under **Actions → Validate and merge into main**.

The action preserves the source commit author when creating the merge commit, identifies GitHub Actions as its committer, and never force-pushes or deletes source branches. It uses the repository's built-in token; no personal access token or Vercel secret is required. The repository must permit Actions to write contents and allow direct updates to `main`.
