# 🔀 EXEMPLE_CONFLIT_MERGE.md - Tutoriel Pratique de Résolution de Conflits

Ce tutoriel montre comment créer et résoudre un conflit de merge dans le projet.

---

## 📋 Table des Matières

1. [Créer un Conflit Intentionnel](#créer-un-conflit-intentionnel)
2. [Identifier le Conflit](#identifier-le-conflit)
3. [Résoudre le Conflit](#résoudre-le-conflit)
4. [Finaliser le Merge](#finaliser-le-merge)
5. [Bonnes Pratiques](#bonnes-pratiques)

---

## 🎯 Objectif

Démontrer comment:
1. Créer deux branches qui modifient le même fichier
2. Identifier les conflits de merge
3. Résoudre les conflits manuellement
4. Complèter le merge

---

## ✅ Créer un Conflit Intentionnel

### Étape 1: Préparer l'Environnement

```bash
# Cloner le repository (ou utiliser l'existant)
git clone https://github.com/Ilamq/TP1-Git.git
cd TP1-Git

# Aller sur develop
git checkout develop
git pull origin develop
```

### Étape 2: Créer la Branche 1 (feature-a)

```bash
# Créer branche feature-a
git checkout -b feature/version-a

# Modifier le README.md
echo "
## Version A Features
- Feature 1 from branch A
- Feature 2 from branch A
" >> README.md

# Committer
git add README.md
git commit -m "feat(docs): add version A features to README"

# Pousser
git push -u origin feature/version-a
```

### Étape 3: Créer la Branche 2 (feature-b)

```bash
# Revenir à develop
git checkout develop
git pull origin develop

# Créer branche feature-b
git checkout -b feature/version-b

# Modifier le MÊME fichier (README.md) au même endroit
echo "
## Version B Features
- Feature 1 from branch B
- Feature 2 from branch B
" >> README.md

# Committer
git add README.md
git commit -m "feat(docs): add version B features to README"

# Pousser
git push -u origin feature/version-b
```

### Étape 4: Créer les Pull Requests

```
Sur GitHub:
1. PR 1: feature/version-a → develop (Merge)
2. PR 2: feature/version-b → develop (Essayer de merger → CONFLIT!)
```

---

## 🔍 Identifier le Conflit

### Voir le Conflit sur GitHub

Quand vous essayez de merger la PR 2, GitHub affichera:

```
This branch has conflicts that must be resolved
```

Ou vous pouvez résoudre localement:

```bash
# Récupérer la dernière version de develop
git checkout develop
git pull origin develop

# Essayer de merger feature/version-b
git merge origin/feature/version-b

# Output:
# CONFLICT (content): Merge conflict in README.md
# Automatic merge failed; fix conflicts and then commit the result.
```

### Voir les Détails du Conflit

```bash
# Voir l'état
git status
# modified:   README.md (both added and modified)

# Voir le conflit
git diff README.md

# Output:
# <<<<<<< HEAD (develop)
# ## Version A Features
# - Feature 1 from branch A
# - Feature 2 from branch A
# =======
# ## Version B Features
# - Feature 1 from branch B
# - Feature 2 from branch B
# >>>>>>> feature/version-b
```

---

## 🔧 Résoudre le Conflit

### Option 1: Garder Develop (Annuler le Merge)

```bash
# Annuler le merge
git merge --abort

# Revenir à l'état initial
git status
# On branch develop (clean)
```

### Option 2: Garder la Branche Entrante

```bash
# Utiliser la version de la branche feature/version-b
git checkout --theirs README.md

# Vérifier
cat README.md
# Montre: Version B Features

# Marquer comme résolu
git add README.md

# Complèter le merge
git commit -m "Merge: accept feature/version-b"
```

### Option 3: Garder la Branche Actuelle

```bash
# Utiliser la version de develop (HEAD)
git checkout --ours README.md

# Vérifier
cat README.md
# Montre: Version A Features

# Marquer comme résolu
git add README.md

# Complèter le merge
git commit -m "Merge: keep develop version"
```

### Option 4: Fusionner les Deux (RECOMMANDÉ)

**C'est la meilleure option - fusionner intelligemment**

#### Étape A: Éditer le Fichier Manuellement

Ouvrez `README.md` avec votre éditeur et éditez:

**Avant (conflit)**:
```markdown
<<<<<<< HEAD
## Version A Features
- Feature 1 from branch A
- Feature 2 from branch A
=======
## Version B Features
- Feature 1 from branch B
- Feature 2 from branch B
>>>>>>> feature/version-b
```

**Après (fusionné)**:
```markdown
## Combined Features
- Feature 1 from branch A
- Feature 2 from branch A
- Feature 1 from branch B
- Feature 2 from branch B
```

#### Étape B: Marquer comme Résolu

```bash
# Ajouter le fichier
git add README.md

# Vérifier le statut
git status
# modified:   README.md (resolved)
```

#### Étape C: Complèter le Merge

```bash
# Committer le merge
git commit -m "Merge: combine features from A and B"

# Message automatique:
# Merge made by the 'recursive' strategy.
# README.md | 8 +++++++++
# 1 file changed, 8 insertions(+)
```

---

## ✅ Finaliser le Merge

### Étape 1: Vérifier le Résultat

```bash
# Voir l'historique
git log --oneline --all --graph

# Output:
# *   372c532 Merge: combine features from A and B
# |\
# | * 9a8c7f1 feat(docs): add version B features to README
# * | 7b6c8e2 feat(docs): add version A features to README
# |/
# * d105e2a TP2: Add CI/CD...
```

### Étape 2: Tester le Code

```bash
# Vérifier que tout fonctionne
cat README.md
# Devrait contenir les deux features

npm install
npm start
# Vérifier pas d'erreurs
```

### Étape 3: Pousser vers GitHub

```bash
# Pousser le merge
git push origin develop

# Sur GitHub, la PR sera automatiquement fermée
```

### Étape 4: Nettoyer

```bash
# Supprimer les branches locales
git branch -d feature/version-a
git branch -d feature/version-b

# Supprimer les branches distantes (optionnel)
git push origin --delete feature/version-a
git push origin --delete feature/version-b
```

---

## 🎯 Bonnes Pratiques

### Comment Prévenir les Conflits

✅ **À FAIRE**:
- Synchroniser souvent avec develop
- Faire des commits petits et fréquents
- Communiquer avec l'équipe
- Reviser et merger les PRs rapidement
- Utiliser `git pull` avant de travailler

```bash
# Bonne pratique
git checkout develop
git pull origin develop  # Toujours sync

git checkout -b feature/ma-feature
# Travailler...
git pull origin develop  # Sync régulièrement
git rebase develop       # Mettre à jour
```

❌ **À ÉVITER**:
- Laisser les branches diverger longtemps
- Modifier les mêmes fichiers
- Ne pas communiquer
- Ignorer les conflits
- Travailler sur main/develop directement

### Signaux d'Alerte

🚨 **Si vous avez beaucoup de conflits**:
1. Divisez la feature en parties plus petites
2. Mergez plus fréquemment
3. Communiquez avec l'équipe
4. Considérez un pair programming

---

## 🔧 Commandes Utiles pour les Conflits

```bash
# Voir les conflits
git status
git diff
git diff --name-only

# Voir les détails
git show :1:filename  # Version de base
git show :2:filename  # Votre version (HEAD)
git show :3:filename  # Autre version (branch)

# Utiliser des outils visuels
git mergetool         # Lance l'outil de merge

# Annuler un merge
git merge --abort

# Rebaser à la place du merge (avancé)
git rebase develop    # Au lieu de merge

# Voir qui a causé le conflit
git log -p --follow README.md
```

---

## 📊 Workflow Complet: Créer et Résoudre un Conflit

```bash
# === CRÉER LES BRANCHES ===

# Branch 1: Version A
git checkout develop
git checkout -b feature/version-a
echo "## Version A" >> README.md
git add .
git commit -m "Add version A"
git push -u origin feature/version-a

# Branch 2: Version B (parallèlement)
git checkout develop
git checkout -b feature/version-b
echo "## Version B" >> README.md  # Même fichier!
git add .
git commit -m "Add version B"
git push -u origin feature/version-b

# === SUR GITHUB ===
# Merger feature/version-a → develop (succès)
# Essayer merger feature/version-b → develop (CONFLIT!)

# === RÉSOUDRE LOCALEMENT ===

git fetch origin
git checkout develop
git pull origin develop

# Essayer le merge
git merge origin/feature/version-b
# CONFLICT (content): Merge conflict in README.md

# Voir le conflit
git diff README.md

# Éditer le fichier README.md
# Fusionner les changements manuellement

# Marquer comme résolu
git add README.md

# Complèter le merge
git commit -m "Merge: combine A and B"

# Pousser
git push origin develop

# === NETTOYER ===

git branch -d feature/version-a
git branch -d feature/version-b
git push origin --delete feature/version-a
git push origin --delete feature/version-b
```

---

## ❌ Erreurs Courantes

### Erreur 1: "Working tree contains uncommitted changes"

```bash
# ERREUR
git merge feature/other
# error: Your local changes to 'README.md' would be overwritten by merge

# SOLUTION
git stash                  # Sauvegarder les changements
git merge feature/other
git stash pop              # Récupérer les changements
```

### Erreur 2: "Could not resolve conflict"

```bash
# ERREUR
# Après édition, conflit toujours présent

# SOLUTION
# Vérifier que vous avez supprimé <<<, ===, >>>
# Relancer git add et commit
```

### Erreur 3: Merge accidentel

```bash
# ERREUR
git merge feature/mauvaise-branche
# Oups!

# SOLUTION - Annuler
git merge --abort

# OU après commit
git reset --hard HEAD~1
```

---

## 🎓 Apprentissages Clés

✅ **Concepts**:
1. Comment les conflits surviennent
2. Comment les identifier
3. Comment les résoudre
4. Comment les prévenir

✅ **Commandes**:
- `git merge`
- `git status`
- `git diff`
- `git checkout --ours/theirs`
- `git merge --abort`
- `git rebase`

✅ **Workflow**:
- Synchroniser souvent
- Faire des commits petits
- Communiquer avec l'équipe
- Résoudre rapidement

---

## 🔗 Ressources

- [GitHub: Resolving merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Pro Git: Basic Merge Conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Merging-and-Conflicts)
- [BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md) - Nos stratégies

---

## 🆘 Besoin d'Aide?

1. Lisez **BRANCHING_STRATEGY.md** section "Merge Conflicts"
2. Consultez ce tutoriel
3. Créez une issue avec le label "help-wanted"

---

**Dernière mise à jour**: 3 février 2026  
**Tutoriel**: Résolution de conflits de merge
**Niveau**: Intermédiaire

---

## 📝 Exercice Pratique

Essayez de:
1. Créer deux branches avec modifications au même fichier
2. Merger la première branche
3. Essayer merger la deuxième (conflit)
4. Résoudre le conflit manuellement
5. Complèter le merge

C'est la meilleure façon d'apprendre! 🚀
