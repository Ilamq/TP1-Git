# 🤝 CONTRIBUTING.md - Guide de Contribution

Merci d'être intéressé par la contribution à ce projet! Ce guide vous explique comment contribuer efficacement.

---

## 📋 Table des Matières

1. [Code of Conduct](#code-of-conduct)
2. [Comment Commencer](#comment-commencer)
3. [Processus de Contribution](#processus-de-contribution)
4. [Conventions de Branching](#conventions-de-branching)
5. [Conventions de Commits](#conventions-de-commits)
6. [Pull Request Process](#pull-request-process)
7. [Standards de Code](#standards-de-code)
8. [Reporting Bugs](#reporting-bugs)

---

## 🎯 Code of Conduct

- Soyez respectueux envers les autres contributeurs
- Acceptez les critiques constructives
- Focalisez-vous sur ce qui est mieux pour la communauté
- Rapportez les comportements inappropriés

---

## 🚀 Comment Commencer

### Prérequis

- Git configuré localement
- Node.js v14+
- npm ou yarn
- Compte GitHub

### Installation Locale

```bash
# Cloner le repository
git clone https://github.com/Ilamq/TP1-Git.git
cd TP1-Git

# Installer les dépendances
npm install

# Créer votre branche de feature
git checkout -b feature/votre-feature-name

# Démarrer le développement
npm start
```

### Fork (contribuer depuis un fork)

Si vous ne pouvez pas pousser directement sur `origin` (par exemple contribution externe), forkez le repository puis clonez votre fork:

```bash
# Sur GitHub: cliquer sur "Fork" en haut à droite
git clone https://github.com/<votre-username>/TP1-Git.git
cd TP1-Git
git remote add upstream https://github.com/Ilamq/TP1-Git.git
# Synchroniser votre fork avec l'upstream
git fetch upstream
git checkout develop
git pull upstream develop
```

Pour soumettre vos modifications, poussez sur votre fork (`origin`) puis créez une Pull Request ciblant `develop` du repository upstream.


---

## 🔄 Processus de Contribution

### Étape 1: Créer une Issue (optionnel mais recommandé)

Avant de commencer à développer:
1. Allez à: https://github.com/Ilamq/TP1-Git/issues
2. Cliquez **New Issue**
3. Décrivez le problème ou la fonctionnalité
4. Attendez les commentaires
5. Commencez le développement

### Étape 2: Créer une Branche

**Important**: Toujours utiliser les conventions de branche!

```bash
# Synchroniser avec develop
git checkout develop
git pull origin develop

# Créer votre branche
git checkout -b feature/ma-feature
# ou
git checkout -b fix/mon-bug
# ou
git checkout -b docs/ma-documentation
```

### Étape 3: Développer et Committer

Faites vos modifications et committez régulièrement:

```bash
git add .
git commit -m "type(scope): description"
```

Voir [Conventions de Commits](#conventions-de-commits)

### Étape 4: Pousser et Créer une PR

```bash
git push origin feature/ma-feature
```

Puis créez une Pull Request sur GitHub

### Étape 5: Review et Merge

1. Attendez la review d'au moins 1 collaborateur
2. Adressez les commentaires
3. Après approbation, mergez dans `develop`

---

## 🌿 Conventions de Branching

Le projet utilise **Git Flow**:

### Branches Principales

| Branche | Objectif | Source | Destination |
|---------|----------|--------|-------------|
| **main** | Production | Pull Request | N/A |
| **develop** | Développement | Feature/Fix/Docs | Pull Request vers main |

### Types de Branches

```
feature/nom-feature      # Nouvelles fonctionnalités
  - feature/add-header
  - feature/dark-mode
  - feature/api-v2

fix/nom-bug              # Corrections de bugs
  - fix/crash-on-load
  - fix/typo-readme
  - fix/memory-leak

docs/nom-docs            # Documentation
  - docs/api-guide
  - docs/setup-instructions
  - docs/contributing

refactor/nom-refactor    # Refactoring du code
  - refactor/reduce-bundle-size
  - refactor/improve-performance

chore/nom-chore          # Tâches non-code
  - chore/update-dependencies
  - chore/configure-ci
  - chore/gitignore
```

### Exemple Complet

```
main (production v1.0.0)
  ↑
  └── Pull Request: Release v1.0.0
      ↓
      develop (staging)
        ├── feature/user-auth ──→ PR ──→ merge to develop
        ├── fix/login-bug ────→ PR ──→ merge to develop
        ├── docs/api-docs ──→ PR ──→ merge to develop
        └── refactor/code-style ──→ PR ──→ merge to develop
```

---

## 📝 Conventions de Commits

Le projet suit **Conventional Commits**:

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type | Description | Exemple |
|------|-------------|---------|
| **feat** | Nouvelle fonctionnalité | `feat(auth): add login page` |
| **fix** | Correction de bug | `fix(api): handle null response` |
| **docs** | Documentation | `docs(readme): update setup steps` |
| **style** | Formatage, pas de code change | `style(css): reformat styles` |
| **refactor** | Refactoring sans feature/fix | `refactor(utils): simplify logic` |
| **perf** | Amélioration de performance | `perf(bundle): reduce size` |
| **test** | Ajout de tests | `test(auth): add login tests` |
| **chore** | Dépendances, config, etc | `chore(deps): upgrade express` |
| **ci** | CI/CD changes | `ci(github): add workflow` |

### Exemples Valides

```bash
# Nouvelle feature
git commit -m "feat(ui): add dark mode toggle button"

# Bug fix
git commit -m "fix(api): resolve timeout on large requests"

# Documentation
git commit -m "docs(contributing): update branch naming"

# Avec body (pour changements complexes)
git commit -m "refactor(parser): improve performance

Improved parsing speed by 40%
- Optimized regex patterns
- Added caching layer
- Reduced memory usage

Closes #42"
```

---

## 🔀 Pull Request Process

### Avant de Créer la PR

1. **Synchroniser avec develop**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/ma-feature
   git rebase develop
   ```

2. **Tester localement**:
   ```bash
   npm install
   npm start
   npm test  # si applicable
   ```

3. **Vérifier le code**:
   - Pas de console.log de debug
   - Code formaté correctement
   - Commentaires clairs pour code complexe

### Créer la PR

1. Allez à: https://github.com/Ilamq/TP1-Git/pulls
2. Cliquez **New Pull Request**
3. Sélectionnez: base: `develop`, compare: `feature/ma-feature`
4. Remplissez le template:

```markdown
## 📝 Description
Brève description de ce que cette PR fait

## 🎯 Type de Changement
- [ ] Nouvelle feature
- [ ] Bug fix
- [ ] Breaking change
- [ ] Documentation

## ✅ Checklist
- [ ] Mon code suit le style du projet
- [ ] J'ai testé localement
- [ ] J'ai mis à jour la documentation
- [ ] Je n'ai pas de console.log de debug

## 🔗 Lié aux Issues
Ferme #123 (si applicable)
```

### Pendant la Review

- Répondez aux commentaires promptement
- Faites les changements demandés
- Re-push pour mettre à jour la PR
- Demandez une nouvelle review

### Politique de validation

- **Au moins 1 reviewer approuvé est requis** avant le merge dans `develop`.
- Toutes les vérifications CI doivent être passées (lint, tests, build) avant approbation.
- Pour les changements critiques (breaking changes, sécurité), demandez 2 reviewers et une validation explicite du mainteneur.
- Les PRs doivent être accompagnées d'une description claire, d'une checklist et, si applicable, d'un lien vers l'issue associée.

### Après Approbation

Un mainteneur va merger votre PR dans `develop`

---

## 💻 Standards de Code

### JavaScript/Node.js

- Utiliser `const` par défaut, `let` si reassignment
- CamelCase pour les variables et fonctions
- SCREAMING_SNAKE_CASE pour les constantes
- Noms descriptifs (pas de `x`, `temp`, `data`)

```javascript
// ✅ BON
const MAX_RETRIES = 3;
const userName = "John";
function fetchUserData() { }

// ❌ MAUVAIS
const x = 3;
var temp = "John";
function fn() { }
```

### HTML

- Utiliser HTML5 sémantique
- Indenter avec 4 espaces
- Attributs dans cet ordre: id, class, data-*, autres

```html
<!-- ✅ BON -->
<header class="navbar" id="main-nav">
  <nav aria-label="Main navigation">
    <a href="/">Home</a>
  </nav>
</header>

<!-- ❌ MAUVAIS -->
<div id="nav" class="bar">
  <a href="/">Home</a>
</div>
```

### CSS

- Utiliser des classes plutôt que des IDs pour les styles
- Noms de classes descriptifs
- Mobile-first approach

```css
/* ✅ BON */
.navbar {
  display: flex;
  padding: 1rem;
}

.navbar__link {
  color: #333;
}

/* ❌ MAUVAIS */
#nav {
  display: flex;
  padding: 1rem;
}

.link {
  color: #333;
}
```

---

## 🐛 Reporting Bugs

### Avant de Reporter

1. Vérifiez si le bug existe déjà (search issues)
2. Testez sur la dernière version de `develop`
3. Essayez de reproduire le bug

### Comment Reporter

1. Allez à: https://github.com/Ilamq/TP1-Git/issues
2. Cliquez **New Issue** → **Bug Report**
3. Remplissez les détails:

```markdown
## 🐛 Description
Brève description du bug

## 📋 Étapes pour Reproduire
1. Allez à ...
2. Cliquez sur ...
3. Observez le bug

## 📸 Screenshots
Attachez des screenshots si pertinent

## 💻 Environnement
- Browser: Chrome 100
- OS: Windows 11
- Node version: 16.13.0

## ✨ Résultat Attendu
Ce qui devrait se passer

## 🔴 Résultat Actuel
Ce qui se passe réellement
```

---

## 📚 Ressources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Semantic Versioning](https://semver.org/)

---

## 🆘 Besoin d'Aide?

- Lisez le [README.md](README.md)
- Consultez les [GitHub Issues](https://github.com/Ilamq/TP1-Git/issues)
- Créez une issue avec le label `question`

---

## 🎉 Merci!

Merci de contribuer au projet! Chaque contribution compte, peu importe la taille.

**Happy coding!** 🚀

---

**Dernière mise à jour**: 3 février 2026  
**Auteur**: Ilamq
