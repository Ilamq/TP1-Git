# 🌿 BRANCHING_STRATEGY.md - Stratégie de Branches et Merge Conflicts

Ce guide explique la stratégie de branches du projet et comment résoudre les conflits de merge.

---

## 📋 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Structure des Branches](#structure-des-branches)
3. [Workflow de Branching](#workflow-de-branching)
4. [Merge Conflicts](#merge-conflicts)
5. [Bonnes Pratiques](#bonnes-pratiques)
6. [Commandes Git Utiles](#commandes-git-utiles)

---

## 🎯 Vue d'Ensemble

Le projet utilise **Git Flow** modifié:

```
main (production)
  ↑ (PRs versionnées)
  │
develop (staging/development)
  ↑ (PRs de features)
  ├── feature/* (nouvelles fonctionnalités)
  ├── fix/* (corrections de bugs)
  ├── docs/* (documentation)
  ├── refactor/* (refactoring)
  └── chore/* (tâches techniques)
```

---

## 🌿 Structure des Branches

### Branches Principales

#### 1. **main** - Production
- Code prêt pour production
- Version stable et testée
- Accès limité au maintainers
- Chaque commit est une release

```
Permissions:
- Push: ❌ (via PR seulement)
- Create: ❌ (via GitHub)
- Delete: ❌ (protégée)
```

#### 2. **develop** - Development
- Code en développement
- Version de travail instable
- PRs de features/fix/docs
- Branche source pour features

```
Permissions:
- Push: ✅ (via PR)
- Create: ✅
- Delete: ❌ (protégée)
```

### Types de Branches

#### feature/* - Nouvelles Fonctionnalités
```bash
# Créer
git checkout -b feature/user-authentication
git checkout -b feature/add-dark-mode
git checkout -b feature/api-v2

# Lancer depuis
git checkout develop
git pull origin develop

# Merger vers
develop (via PR)
```

**Convention**: `feature/kebab-case-description`

#### fix/* - Corrections de Bugs
```bash
# Créer
git checkout -b fix/login-crash
git checkout -b fix/null-pointer-exception

# Lancer depuis
git checkout develop

# Merger vers
develop (via PR) → main (après release)
```

**Convention**: `fix/kebab-case-issue-name`

#### docs/* - Documentation
```bash
# Créer
git checkout -b docs/api-documentation
git checkout -b docs/setup-guide

# Lancer depuis
git checkout develop

# Merger vers
develop (via PR)
```

**Convention**: `docs/kebab-case-topic`

#### refactor/* - Refactoring
```bash
# Créer
git checkout -b refactor/reduce-bundle-size
git checkout -b refactor/improve-code-quality

# Lancer depuis
git checkout develop

# Merger vers
develop (via PR)
```

**Convention**: `refactor/kebab-case-change`

#### chore/* - Tâches Techniques
```bash
# Créer
git checkout -b chore/update-dependencies
git checkout -b chore/setup-github-actions

# Lancer depuis
git checkout develop

# Merger vers
develop (via PR)
```

**Convention**: `chore/kebab-case-task`

#### hotfix/* - Correctifs Production (rare)
```bash
# Créer (depuis main)
git checkout -b hotfix/critical-security-fix
git checkout main
git checkout -b hotfix/database-crash

# Merger vers
main (via PR + merge)
develop (pour resync)
```

**Convention**: `hotfix/kebab-case-critical-fix`

---

## 🔄 Workflow de Branching

### Créer une Nouvelle Feature

#### Étape 1: Préparer
```bash
# Synchroniser avec develop
git checkout develop
git pull origin develop

# Créer la branche feature
git checkout -b feature/ma-feature
```

#### Étape 2: Développer
```bash
# Faire des changements
echo "code" > file.js

# Committer (avec conventional commits)
git add .
git commit -m "feat(scope): description"
git commit -m "feat(scope): another change"

# Pousser
git push -u origin feature/ma-feature
```

#### Étape 3: Pull Request
```bash
# Sur GitHub: Créer PR
# Base: develop
# Compare: feature/ma-feature
# Title: feat(scope): description
# Description: [voir template PR]
```

#### Étape 4: Code Review
```bash
# Adresser les commentaires
git add .
git commit -m "fix: address review comment"
git push origin feature/ma-feature
```

#### Étape 5: Merge
```bash
# Cliquer "Merge pull request" sur GitHub
# Stratégie: "Create a merge commit" (recommandé)
```

#### Étape 6: Nettoyer
```bash
# Supprimer la branche locale
git checkout develop
git branch -d feature/ma-feature

# Supprimer la branche distante (optionnel)
git push origin --delete feature/ma-feature
```

### Workflow Complet - Exemple

```bash
# 1. Préparer
git checkout develop
git pull origin develop

# 2. Créer branche
git checkout -b feature/dark-mode

# 3. Développer
echo "// dark mode" >> public/style.css
git add public/style.css
git commit -m "feat(ui): add dark mode styles"

# 4. Pousser
git push -u origin feature/dark-mode

# 5. Créer PR sur GitHub (feature/dark-mode → develop)

# 6. Adresser les commentaires si nécessaire
git add .
git commit -m "fix: improve dark mode colors"
git push origin feature/dark-mode

# 7. Merger via GitHub

# 8. Mettre à jour local
git checkout develop
git pull origin develop
git branch -d feature/dark-mode
```

---

## ⚠️ Merge Conflicts

Les conflits surviennent quand deux branches modifient les mêmes lignes.

### Comprendre les Conflits

```
<<<<<<< HEAD (votre branche)
// Votre code
=======
// Code de l'autre branche
>>>>>>> feature/other-feature
```

### Résoudre Manuellement

#### Étape 1: Identifier les Conflits
```bash
git status
# Modified: file1.js (conflicted)
```

#### Étape 2: Éditer les Fichiers
Ouvrez les fichiers conflictés et décidez:
- Garder votre code
- Garder le code de l'autre
- Fusionner les deux

```javascript
// Avant (conflit)
<<<<<<< HEAD
function darkMode() {
  // Your code
}
=======
function darkMode() {
  // Other code
}
>>>>>>> feature/dark-mode

// Après (résolu)
function darkMode() {
  // Merged code
}
```

#### Étape 3: Marker comme Résolu
```bash
git add file1.js
git add file2.js
# ou
git add .
```

#### Étape 4: Complèter le Merge
```bash
git commit -m "Merge: resolve conflicts"
git push origin develop
```

### Exemple Complet de Résolution

```bash
# 1. Créer deux branches avec changements différents
git checkout -b feature/a
echo "code a" >> file.txt
git add file.txt
git commit -m "Add code a"
git push -u origin feature/a

# Créer PR et merger feature/a → develop

# 2. Pendant ce temps, créer feature/b
git checkout develop
git checkout -b feature/b
echo "code b" >> file.txt  # Même fichier!
git add file.txt
git commit -m "Add code b"
git push -u origin feature/b

# Créer PR et essayer merger → CONFLIT!

# 3. Résoudre localement
git fetch origin
git checkout feature/b
git merge develop  # Crée le conflit

# 4. Voir les conflits
git status
# modified:   file.txt

# 5. Éditer file.txt
# Garder les deux codes ou choisir

# 6. Marquer comme résolu
git add file.txt
git commit -m "resolve: merge conflicts with develop"
git push origin feature/b

# 7. Merger sur GitHub
```

### Prévenir les Conflits

✅ **À FAIRE**:
- Communicateur avec l'équipe
- Merger les PRs rapidement
- Rebase avant de pusher
- Tester après merge

❌ **À ÉVITER**:
- Laisser les branches longtemps diverger
- Modifier les mêmes fichiers
- Ne pas synchroniser avec develop
- Ignorer les conflits

### Commandes pour les Conflits

```bash
# Voir l'état des conflits
git status

# Voir le contenu des conflits
git diff

# Utiliser son code
git checkout --ours file.txt

# Utiliser le code de l'autre
git checkout --theirs file.txt

# Annuler un merge
git merge --abort

# Rebaser au lieu de merger (avancé)
git rebase develop
```

---

## ✨ Bonnes Pratiques

### Nomination des Branches

✅ **BON**:
- `feature/dark-mode` - clair et descriptif
- `fix/login-crash` - type identifiable
- `docs/api-guide` - domaine spécifique

❌ **MAUVAIS**:
- `feature/new` - trop vague
- `myfeature` - pas de type
- `feature/dark_mode` - utiliser tirets, pas underscores

### Avant de Créer une PR

✅ Synchroniser avec develop
✅ Tester localement
✅ Vérifier le linting
✅ Pas de console.log de debug
✅ Messages de commits clairs

### Pendant la Review

✅ Répondre promptement
✅ Faire les changements demandés
✅ Re-pousser pour mettre à jour

### Après le Merge

✅ Tester sur develop/main
✅ Monitorer les déploiements
✅ Supprimer les branches obsolètes

---

## 🛠️ Commandes Git Utiles

### Gestion des Branches

```bash
# Lister les branches locales
git branch

# Lister les branches distantes
git branch -r

# Lister toutes les branches
git branch -a

# Créer une branche
git checkout -b feature/ma-feature

# Renommer une branche
git branch -m old-name new-name

# Supprimer une branche locale
git branch -d feature/ma-feature

# Forcer la suppression
git branch -D feature/ma-feature

# Supprimer une branche distante
git push origin --delete feature/ma-feature
```

### Sync avec develop

```bash
# Récupérer les derniers changements
git fetch origin develop

# Mettre à jour develop local
git checkout develop
git pull origin develop

# Rebase sa branche (avancé)
git checkout feature/ma-feature
git rebase develop
```

### Merge Localement

```bash
# Merger develop dans sa branche
git checkout feature/ma-feature
git merge develop

# En cas de conflit
git merge --abort  # Annuler
```

### Voir l'Historique

```bash
# Voir les commits
git log --oneline

# Voir le graphique des branches
git log --graph --oneline --all

# Voir les différences
git diff feature/ma-feature develop
```

---

## 📊 Exemple Visual: Workflow Complet

```
main (v1.0.0)
│
└─ develop
   ├─ feature/user-auth (create PR)
   │  ├─ commit 1
   │  ├─ commit 2
   │  └─ merge → develop
   │
   ├─ fix/login-bug
   │  ├─ commit 1
   │  └─ merge → develop
   │
   ├─ docs/readme
   │  └─ merge → develop
   │
   └─ [Tous mergés] → PR main → release v1.1.0
```

---

## 🆘 Troubleshooting

### J'ai commis sur la mauvaise branche

```bash
# Créer une nouvelle branche avec mes commits
git branch -b feature/correct-branch

# Revenir à main/develop et reset
git checkout develop
git reset --hard origin/develop
```

### Je veux annuler un commit

```bash
# Voir les commits
git log --oneline

# Revenir à un commit antérieur
git reset --soft HEAD~1  # Garder les changements
git reset --hard HEAD~1  # Supprimer les changements
```

### Mon branche est divergée de develop

```bash
# Récupérer les derniers changements
git fetch origin

# Rebase (réécrire l'historique)
git rebase origin/develop

# Ou merger (garder l'historique)
git merge origin/develop
```

---

**Dernière mise à jour**: 3 février 2026  
**Auteur**: Ilamq
