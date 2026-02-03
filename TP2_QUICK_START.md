# 🎯 TP2 - GUIDE D'UTILISATION RAPIDE

Bienvenue dans le TP2! Ce fichier vous guide pour utiliser les outils et processus mis en place.

---

## 📚 Documentation TP2

Le TP2 ajoute 5 nouveaux fichiers de documentation au projet TP1:

### 1. **CONTRIBUTING.md** ⭐ À LIRE EN PREMIER
Contenu:
- Comment contribuer au projet
- Conventions de branching
- Conventions de commits
- Process de Pull Request
- Standards de code

**Utilité**: Pour les contributeurs

### 2. **BRANCHING_STRATEGY.md**
Contenu:
- Explication de Git Flow
- 8 types de branches documentés
- Workflow complet (6 étapes)
- Résolution de conflits
- Bonnes pratiques

**Utilité**: Pour comprendre la stratégie de branches

### 3. **PROJECT_MANAGEMENT.md**
Contenu:
- GitHub Issues guide
- GitHub Projects tutorial
- 17 labels documentés
- Milestones et Releases
- Workflow complet

**Utilité**: Pour gérer le projet

### 4. **.github/workflows/ci-cd.yml**
Contenu:
- 7 jobs GitHub Actions
- Linting, testing, building
- Security checks
- Notifications

**Utilité**: Automatisation CI/CD

### 5. **EXEMPLE_CONFLIT_MERGE.md**
Contenu:
- Comment créer un conflit intentionnel
- Identifier les conflits
- 4 manières de résoudre
- Exercice pratique

**Utilité**: Apprendre à résoudre les conflits

### 6. **TP2_SUMMARY.md**
Contenu:
- Résumé complet du TP2
- Statistiques
- Étapes suivantes

**Utilité**: Vue d'ensemble TP2

---

## 🚀 Démarrer le Développement TP2

### Étape 1: Cloner et Setup

```bash
# Cloner
git clone https://github.com/Ilamq/TP1-Git.git
cd TP1-Git

# Voir les branches
git branch -a

# Aller sur develop
git checkout develop
git pull origin develop
```

### Étape 2: Créer une Branche Feature

```bash
# D'après CONTRIBUTING.md et BRANCHING_STRATEGY.md

git checkout -b feature/ma-nouvelle-feature
# ou
git checkout -b fix/mon-bug
# ou
git checkout -b docs/ma-documentation
```

### Étape 3: Développer et Committer

```bash
# Faire des changements...

# Committer avec Conventional Commits (voir CONTRIBUTING.md)
git add .
git commit -m "feat(scope): description"
git commit -m "fix(scope): description"
git commit -m "docs(scope): description"
```

### Étape 4: Pousser et Créer une PR

```bash
# Pousser
git push -u origin feature/ma-nouvelle-feature

# Sur GitHub: Créer PR
# Base: develop
# Title: feat(scope): description
# Description: [voir template dans CONTRIBUTING.md]
```

### Étape 5: CI/CD Automatique

```
Push → GitHub Actions Lance
├── Linting
├── Tests
├── Build
├── Security Checks
└── Status Report
```

### Étape 6: Code Review et Merge

```
PR Créée → Review → Approve → Merge → Issue Closes
```

---

## 🌿 Guide des Branches

### Structure

```
main (production)
  └─ PR releases

develop (development)  ← Vous travaillez ici
  ├── feature/*       ← Nouvelles fonctionnalités
  ├── fix/*           ← Corrections de bugs
  ├── docs/*          ← Documentation
  ├── refactor/*      ← Refactoring
  └── chore/*         ← Tâches techniques
```

### Créer une Branche

**Format**: `type/kebab-case-description`

```bash
# Feature
git checkout -b feature/user-authentication

# Bug fix
git checkout -b fix/login-crash

# Documentation
git checkout -b docs/api-guide

# Refactoring
git checkout -b refactor/reduce-bundle-size

# Tâche technique
git checkout -b chore/update-dependencies
```

### Conventions

Voir **BRANCHING_STRATEGY.md** pour:
- Détails complets
- Workflow step-by-step
- Bonnes pratiques
- Résolution de conflits

---

## 📝 Conventions de Commits

### Format

```
type(scope): description

[optional body]
```

### Types

- `feat` - Nouvelle fonctionnalité
- `fix` - Correction de bug
- `docs` - Documentation
- `style` - Formatage
- `refactor` - Refactoring
- `perf` - Performance
- `test` - Tests
- `chore` - Tâches techniques
- `ci` - CI/CD

### Exemples

```bash
git commit -m "feat(auth): add login page"
git commit -m "fix(api): handle null response"
git commit -m "docs(readme): update setup steps"
git commit -m "chore(deps): upgrade express"
```

Voir **CONTRIBUTING.md** pour plus d'exemples.

---

## ⚙️ CI/CD Automatique

### Quand ça s'exécute

✅ Push sur main, develop, feature/*
✅ Pull request vers main, develop

### Que ça fait

1. **Linting** - Vérification du code
2. **Tests** - Exécution des tests
3. **Build** - Vérification du build
4. **Security** - Audit de sécurité
5. **Notifications** - Statut final

### Voir les Logs

```
GitHub → Actions → Sélectionner le workflow
```

---

## 🐛 Résoudre un Conflit de Merge

### Rapide

```bash
# Voir les conflits
git status

# Éditer les fichiers conflictés
# Supprimer <<<, ===, >>>
# Fusionner intelligemment

# Marquer comme résolu
git add .

# Complèter
git commit -m "Merge: resolve conflicts"
git push
```

### Détaillé

Voir **EXEMPLE_CONFLIT_MERGE.md** pour:
- Guide complet
- 4 méthodes de résolution
- Exercice pratique

---

## 🎯 Gestion de Projet (Manuel)

### Créer un GitHub Project

```
1. Allez à: github.com/Ilamq/TP1-Git/projects
2. New Project
3. Template: Kanban
4. Colonnes: To Do, In Progress, Review, Done
```

### Créer une Issue

```
1. github.com/Ilamq/TP1-Git/issues
2. New Issue
3. Sélectionnez template (Bug/Feature/Docs)
4. Remplissez les détails
5. Ajouter labels, milestone
```

### Workflow Issue → PR → Merge

```
Issue #42 Created
  ↓
Create branch feature/fix-42
  ↓
Develop & Commit
  ↓
Push & Create PR
  ↓
Link to issue #42
  ↓
Code Review
  ↓
Approve & Merge
  ↓
Issue auto-closes
```

Voir **PROJECT_MANAGEMENT.md** pour plus de détails.

---

## 📊 Commandes Git Essentielles

### Branches

```bash
git branch -a              # Voir toutes les branches
git checkout develop       # Aller sur develop
git checkout -b feature/x  # Créer branche
git branch -d feature/x    # Supprimer branche
```

### Commits

```bash
git add .                  # Ajouter les changements
git commit -m "msg"        # Committer
git log --oneline          # Voir l'historique
git diff                   # Voir les différences
```

### Sync

```bash
git fetch origin           # Récupérer les changements
git pull origin develop    # Récupérer et merger
git push origin feature/x  # Pousser la branche
```

### Merge & Rebase

```bash
git merge develop          # Merger develop dans ma branche
git rebase develop         # Rebaser (avancé)
git merge --abort          # Annuler un merge
```

---

## 🔗 Liens Utiles

| Ressource | Lien |
|-----------|------|
| Repository | https://github.com/Ilamq/TP1-Git |
| Issues | https://github.com/Ilamq/TP1-Git/issues |
| Projects | https://github.com/Ilamq/TP1-Git/projects |
| Actions | https://github.com/Ilamq/TP1-Git/actions |
| Settings | https://github.com/Ilamq/TP1-Git/settings |

---

## ✨ Workflow Complet: Exemple

### Scénario: Ajouter une Feature

```bash
# 1. Synchroniser
git checkout develop
git pull origin develop

# 2. Créer branche
git checkout -b feature/dark-mode

# 3. Développer
echo "// dark mode" >> public/style.css
git add .
git commit -m "feat(ui): add dark mode support"

# 4. Pousser
git push -u origin feature/dark-mode

# 5. Créer PR sur GitHub
# Title: feat(ui): add dark mode support
# Description: [voir template]

# 6. CI/CD lance automatiquement

# 7. Code review et approbation

# 8. Merger via GitHub
# Issue (si lié) auto-ferme

# 9. Nettoyer
git checkout develop
git pull origin develop
git branch -d feature/dark-mode
```

---

## 🆘 Troubleshooting

### Je suis sur la mauvaise branche

```bash
git status              # Voir la branche actuelle
git checkout develop    # Aller sur develop
```

### Je veux annuler mes changements

```bash
git reset --hard HEAD   # ATTENTION: Perd tout!
git reset --soft HEAD~1 # Garder les changements
```

### Mes branches divergent

```bash
git fetch origin
git rebase origin/develop
# ou
git merge origin/develop
```

### Besoin d'aide?

1. Lire **CONTRIBUTING.md**
2. Lire **BRANCHING_STRATEGY.md**
3. Consulter **EXEMPLE_CONFLIT_MERGE.md**
4. Créer une issue avec "help-wanted"

---

## 📚 Ordre de Lecture Recommandé

### Pour Commencer

1. **CONTRIBUTING.md** - Conventions
2. **BRANCHING_STRATEGY.md** - Git Flow
3. **Ce fichier** - Guide rapide

### Pour Approfondir

4. **PROJECT_MANAGEMENT.md** - Gestion
5. **EXEMPLE_CONFLIT_MERGE.md** - Conflits
6. **.github/workflows/ci-cd.yml** - CI/CD

---

## 🎓 Résumé TP2

✅ **Branche develop créée** et prête pour développement
✅ **Documentation complète** pour contribution
✅ **Workflow structuré** avec Git Flow
✅ **CI/CD automatisé** avec GitHub Actions
✅ **Gestion de projet** avec GitHub Issues & Projects
✅ **Résolution de conflits** documentée

Le projet est maintenant prêt pour collaboration professionnelle!

---

## 🚀 Prochaines Étapes

### Maintenant

1. Lire **CONTRIBUTING.md**
2. Lire **BRANCHING_STRATEGY.md**
3. Tester localement

### Pour Compléter TP2

1. Créer un GitHub Project
2. Créer quelques issues exemples
3. Ajouter des labels
4. Tester le workflow complet

---

**TP2 Ready to Go!** 🎉

Pour plus d'informations, consultez la documentation complète dans le repository.

Happy coding! 🚀
