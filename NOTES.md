# NOTES - Merge Conflict Simulation and Resolution

This file documents the steps performed to simulate a merge conflict between `main` and `develop`, and how it was resolved locally.

## 1) What I changed
- On `main`: modified a sentence in `README.md` to include an annotation `(Edited on `main` branch to simulate a conflicting change.)`.
- On `develop`: modified the same sentence in `README.md` to include `(Edited on `develop` branch to simulate a conflicting change.)`.

## 2) How the conflict was produced
1. Ensure both branches up-to-date and pushed to `origin`.
2. On local machine, run:

```bash
git checkout main
git fetch origin
git merge origin/develop
```

This attempted merge produced a conflict in `README.md` because the same line was changed differently on both branches.

## 3) How the conflict was resolved (manual)
1. Open `README.md` and look for conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`.
2. Edit the file to choose the correct content or combine both changes. In this simulation I kept a combined sentence indicating both edits.
3. After editing, mark the file as resolved and commit:

```bash
git add README.md
git commit -m "fix(conflict): resolve README.md merge conflict between main and develop"
git push origin main
```

## 4) Notes & Recommendation
- Prefer creating small PRs and rebasing feature branches frequently to reduce conflicts.
- When resolving conflicts, favor clarity and include a clear commit message describing the resolution.
- Use `git mergetool` for large conflicts if you have a GUI diff/merge tool configured.

---

End of notes.
