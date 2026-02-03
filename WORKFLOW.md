# Workflow Collaboratif - Guide Complet

## 📋 Étapes Complétées

### 1. Structure du Projet ✅
- [x] Créé un mini-projet Node.js/Express
- [x] Fichiers statiques HTML/CSS/JS
- [x] Package.json avec dépendances
- [x] API REST simple sur `/api/hello`

### 2. Versionning Git ✅
- [x] Initialisation Git locale
- [x] Commit initial avec tous les fichiers
- [x] Configuration du remote (origin)
- [x] Push vers GitHub sur la branche `main`

### 3. Travail Collaboratif ✅
- [x] Création de la branche `feature/add-header-section`
- [x] Améliorations:
  - Navigation bar avec liens
  - Section "Features" avec grid design
  - Amélioration du CSS et du layout
  - Responsive design
- [x] Commit des changements
- [x] Push vers GitHub

### 4. Pull Request à Créer 🚀

#### Sur GitHub:
1. Allez à: https://github.com/Ilamq/TP1-Git
2. Cliquez sur **Pull Requests**
3. Cliquez sur **New Pull Request**
4. Sélectionnez:
   - Base: `main`
   - Compare: `feature/add-header-section`
5. Remplissez le formulaire:
   ```
   Title: Add enhanced header with navigation and features section
   
   Description:
   ## Changes
   - Added navigation bar with logo and links
   - Created feature cards grid with icons
   - Enhanced CSS styling and responsive design
   - Improved layout and user experience
   
   ## Type of Change
   - [x] Enhancement
   - [ ] Bug fix
   - [ ] Breaking change
   
   Related issues: None
   ```
6. Cliquez sur **Create Pull Request**
7. Assignez le collaborateur comme reviewer

#### Après approbation:
1. Cliquez sur **Merge pull request**
2. Confirmez le merge
3. Supprimez la branche distante (optionnel)

### 5. Ajouter un Collaborateur 👥

Sur GitHub (Settings → Collaborators):
1. Allez à: https://github.com/Ilamq/TP1-Git/settings/access
2. Cliquez sur **Add people**
3. Entrez le nom d'utilisateur GitHub
4. Sélectionnez le rôle (Maintain, Triage, etc.)
5. Cliquez sur **Add [username] to this repository**
6. Attendez que le collaborateur accepte l'invitation

### 6. Déploiement sur GitHub Pages 🚀

#### Frontend (HTML/CSS/JS):
1. Allez à: https://github.com/Ilamq/TP1-Git/settings/pages
2. Configurez:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/root` (pour servir la racine)
3. Cliquez sur **Save**
4. GitHub Pages crée automatiquement un lien comme:
   `https://ilamq.github.io/TP1-Git`
5. Mettez à jour le README avec ce lien

#### Backend (Express):
À déployer sur Render, Railway, ou Heroku (TP3/4)

---

## 📂 Structure du Projet

```
TP1-Git/
├── public/
│   ├── index.html          # Page d'accueil
│   ├── style.css           # Styles CSS
│   └── script.js           # JavaScript client
├── server.js               # Serveur Express
├── package.json            # Dépendances
├── .gitignore              # Fichiers ignorés
├── README.md               # Documentation
└── WORKFLOW.md             # Ce fichier
```

---

## 🔗 Liens Importants

- **Repository**: https://github.com/Ilamq/TP1-Git
- **Pull Requests**: https://github.com/Ilamq/TP1-Git/pulls
- **Settings**: https://github.com/Ilamq/TP1-Git/settings
- **GitHub Pages**: https://github.com/Ilamq/TP1-Git/settings/pages
- **Collaborators**: https://github.com/Ilamq/TP1-Git/settings/access

---

## 📝 Commandes Git Utiles

```bash
# Voir l'historique des commits
git log --oneline

# Voir les branches locales et distantes
git branch -a

# Créer une nouvelle branche
git checkout -b feature/nom-feature

# Revenir à main
git checkout main

# Supprimer une branche locale
git branch -d feature/nom-feature

# Supprimer une branche distante
git push origin --delete feature/nom-feature

# Voir les changements non committés
git status
git diff

# Mettre à jour depuis le remote
git pull origin main
```

---

## ✅ Checklist des Livrables

- [x] Projet créé localement
- [x] Code versionné avec Git
- [x] Repository public sur GitHub
- [ ] Collaborateur ajouté (À faire manuellement)
- [x] README complet
- [ ] Pull Request créée et mergée (À créer manuellement)
- [ ] GitHub Pages déployé (À configurer manuellement)
- [ ] Capture d'écran collaborateur (À prendre manuellement)

---

**Dernière mise à jour**: 3 février 2026
**Statut**: Prêt pour collaboration
