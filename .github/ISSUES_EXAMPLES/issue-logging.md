---
title: "Mettre en place un système de logs"
labels: [enhancement, backend]
---

Résumé
------

Ajouter un système de logs côté serveur pour centraliser les erreurs et informations (niveau info/warn/error).

Contexte
--------

Actuellement le serveur retourne des messages en console mais il n'y a pas de système de logs structuré ni de rotation. On souhaite ajouter un logger (p.ex. `winston`), et des fichiers de log ou sortie JSON selon l'environnement.

Critères d'acceptation
----------------------
- Installer et configurer un logger (ex: `winston`)
- Logs séparés pour `error` et `combined`
- Format JSON pour intégration future
- Documentation de la configuration dans `CONTRIBUTING.md` ou `PROJECT_MANAGEMENT.md`

Assignee: (non assigné)

Branch recommandée: `chore/logging`

Notes
-----
- Voir `server.js` pour les points d'entrée des logs.
