# 📊 PROJET_MANAGEMENT.md - Gestion de Projet

Ce guide explique comment gérer les issues, projets et releases avec GitHub.

---

## 📋 Table des Matières

1. [GitHub Issues](#github-issues)
2. [GitHub Projects](#github-projects)
3. [Labels](#labels)
4. [Milestones](#milestones)
5. [Releases](#releases)
6. [Workflow de Gestion](#workflow-de-gestion)

---

## 🐛 GitHub Issues

Les issues sont utilisées pour tracker les bugs, features et discussions.

### Types d'Issues

#### 1. Bug Report
**Template**: Quand quelque chose ne fonctionne pas

```markdown
## 🐛 Description
Brève description du bug

## 📋 Étapes pour Reproduire
1. Allez à ...
2. Cliquez sur ...
3. Observez le bug

## 📸 Screenshots
[Attachez des captures d'écran]

## 💻 Environnement
- Browser: ...
- OS: ...
- Version: ...

## ✨ Résultat Attendu
Ce qui devrait se passer

## 🔴 Résultat Actuel
Ce qui se passe réellement
```

#### 2. Feature Request
**Template**: Demander une nouvelle fonctionnalité

```markdown
## ✨ Description
Brève description de la fonctionnalité

## 🎯 Problème Résolu
Quel problème cette feature résout?

## 💡 Solution Proposée
Votre idée pour implémenter cette feature

## 🔄 Alternatives
Y a-t-il des alternatives à considérer?

## 📋 Tâches Liées
- [ ] Task 1
- [ ] Task 2
```

#### 3. Documentation
**Template**: Améliorer la documentation

```markdown
## 📝 Quoi Améliorer
Quelle partie de la documentation?

## 📖 Contenu Proposé
[Proposez le contenu ou les changements]

## 🔗 Ressources
[Liens pertinents]
```

### Créer une Issue

1. Allez à: https://github.com/Ilamq/TP1-Git/issues
2. Cliquez **New Issue**
3. Sélectionnez un template
4. Remplissez les détails
5. Cliquez **Submit new issue**

### Bonnes Pratiques pour les Issues

✅ **À FAIRE**:
- Titre clair et descriptif
- Description détaillée
- Screenshots/logs si applicable
- Rechercher les doublons avant de créer
- Utiliser les labels appropriés

❌ **À ÉVITER**:
- Titres vagues comme "Ça ne marche pas"
- Manquer d'information
- Discussions non-pertinentes
- Double posts

---

## 🎯 GitHub Projects

Les projets permettent d'organiser le travail en kanban.

### Créer un Project

1. Allez à: https://github.com/Ilamq/TP1-Git/projects
2. Cliquez **New project**
3. Sélectionnez un template (Kanban recommandé)
4. Nommez le projet
5. Cliquez **Create project**

### Colonnes Typiques

```
📋 To Do        → Issues à faire
🔄 In Progress  → Issues en cours
👀 Review       → En review
✅ Done         → Complétées
```

### Utiliser les Projects

1. Allez au project
2. Cliquez **Add card**
3. Cherchez l'issue
4. Sélectionnez-la
5. Déplacez entre colonnes selon le statut

---

## 🏷️ Labels

Les labels catégorisent les issues.

### Labels par Type

#### Priorité
- `priority-critical` 🔴 Urgent
- `priority-high` 🟠 Important
- `priority-medium` 🟡 Normal
- `priority-low` 🟢 Peut attendre

#### Type de Travail
- `bug` 🐛 Correction de bug
- `feature` ✨ Nouvelle fonctionnalité
- `docs` 📚 Documentation
- `refactor` 🔄 Refactoring
- `chore` ⚙️ Tâche technique
- `test` 🧪 Tests

#### Statut
- `help-wanted` 🙏 Cherche de l'aide
- `good-first-issue` 👶 Bon pour commencer
- `wontfix` ❌ Ne sera pas corrigé
- `duplicate` 🔁 Doublon

#### Domaine
- `frontend` 🎨 Interface utilisateur
- `backend` ⚙️ Serveur/API
- `devops` 🚀 Déploiement/CI-CD
- `security` 🔒 Sécurité

### Appliquer des Labels

1. Ouvrez une issue
2. Cliquez **Labels** sur la droite
3. Sélectionnez les labels pertinents
4. Cliquez ailleurs pour appliquer

---

## 🎯 Milestones

Les milestones groupent les issues par version/release.

### Créer un Milestone

1. Allez à: https://github.com/Ilamq/TP1-Git/milestones
2. Cliquez **New milestone**
3. Nommez-le (ex: "v1.1.0")
4. Décrivez-le
5. Définissez la due date
6. Cliquez **Create milestone**

### Associer une Issue à un Milestone

1. Ouvrez une issue
2. Cliquez **Milestone** sur la droite
3. Sélectionnez le milestone
4. Cliquez ailleurs pour appliquer

### Exemple de Milestones

```
v1.0.0 (Completed)
  ├── ✅ Initial project setup
  ├── ✅ Basic UI
  └── ✅ API integration

v1.1.0 (In Progress)
  ├── 🔄 Dark mode feature
  ├── 🔄 User authentication
  └── ⏳ Enhanced documentation

v2.0.0 (Planned)
  ├── ⏳ Major refactor
  └── ⏳ New features
```

---

## 📦 Releases

Les releases marquent les versions publiques.

### Créer une Release

1. Allez à: https://github.com/Ilamq/TP1-Git/releases
2. Cliquez **Draft a new release**
3. Remplissez les détails:

```
Tag version:     v1.1.0
Target:          main
Release title:   Version 1.1.0

Description:
## What's New
- Added dark mode (#42)
- Fixed login bug (#38)
- Updated documentation

## Breaking Changes
None

## Installation
npm install
npm start

## Contributors
@user1 @user2
```

4. Cliquez **Publish release**

### Versionning (Semantic Versioning)

```
MAJOR.MINOR.PATCH
v1.2.3
│ │ └─ Patch: Bug fixes, small changes
│ └─── Minor: New features, backwards compatible
└───── Major: Breaking changes
```

**Exemples**:
- v1.0.0 → v1.0.1: Bug fix
- v1.0.1 → v1.1.0: New feature
- v1.1.0 → v2.0.0: Breaking change

---

## 🔄 Workflow de Gestion Complet

### Exemple: Nouvelle Feature

#### 1️⃣ Créer une Issue
```
Title: Add Dark Mode Feature
Label: feature, priority-high
Milestone: v1.1.0
Body: [Feature request template]
```

#### 2️⃣ Ajouter au Project
```
Project: Current Sprint
Card: "Add Dark Mode Feature"
Move to: "To Do"
```

#### 3️⃣ Créer une Branche
```bash
# Label l'issue #42
git checkout -b feature/dark-mode
```

#### 4️⃣ Commencer le Travail
```bash
# Développer...
git commit -m "feat(ui): add dark mode toggle"
git commit -m "feat(css): add dark mode styles"
```

#### 5️⃣ Mettre à Jour le Project
```
Card: "Add Dark Mode Feature"
Move to: "In Progress"
Assignee: [Votre nom]
```

#### 6️⃣ Créer une Pull Request
```
Title: Add dark mode feature (#42)
Description: Implements dark mode toggle...
Link issue #42
Link milestone v1.1.0
```

#### 7️⃣ Code Review
```
Project card: Move to "Review"
Attendez les feedbacks
Addressez les commentaires
```

#### 8️⃣ Merger
```
Project card: Move to "Done"
Issue #42: Auto-closes
Milestone updated
```

---

## 📈 Dashboard KPIs

### Métriques à Suivre

| Métrique | Objectif | Commande |
|----------|----------|----------|
| **Open Issues** | < 20 | Issues page |
| **PR Response Time** | < 24h | Pull requests |
| **Release Cycle** | 2-4 semaines | Releases |
| **Test Coverage** | > 80% | CI/CD logs |
| **Code Quality** | Grade A | GitHub Actions |

---

## 🎯 Bonnes Pratiques

### Pour les Issues

✅ Titre descriptif et unique  
✅ Reproduction steps claires  
✅ Labels appropriés  
✅ Assigné à quelqu'un  
✅ Lié à un milestone

### Pour les PRs

✅ Référencer l'issue (#42)  
✅ Description détaillée  
✅ Liés aux milestones  
✅ Demander review  
✅ Responsive aux commentaires

### Pour les Projects

✅ Garder à jour  
✅ Déplacer les cartes  
✅ Revue hebdomadaire  
✅ Ajuster les priorités

---

## 🔗 Liens Utiles

- Issues: https://github.com/Ilamq/TP1-Git/issues
- Projects: https://github.com/Ilamq/TP1-Git/projects
- Milestones: https://github.com/Ilamq/TP1-Git/milestones
- Releases: https://github.com/Ilamq/TP1-Git/releases
- Actions: https://github.com/Ilamq/TP1-Git/actions

---

**Dernière mise à jour**: 3 février 2026  
**Auteur**: Ilamq
