---
title: "Corriger un bug ou améliorer le responsive"
labels: [bug, ui]
---

Résumé
------

Améliorer la réactivité (responsive) de la page sur petits écrans et corriger un bug d'affichage du menu sur mobile.

Contexte
--------

Sur certains petits écrans le header déborde et les boutons du menu ne sont pas alignés. Il faut tester sur plusieurs résolutions et corriger le CSS.

Critères d'acceptation
----------------------
- Header responsive sur < 480px et entre 480-768px
- Menu accessible et utilisable sur mobile
- Pas de débordement horizontal
- Tests manuels sur Chrome DevTools (mobile)

Assignee: @COLLABORATOR_USERNAME  # Remplacer si nécessaire

Branch recommandée: `fix/responsive`

Notes
-----
- Voir `public/style.css` et `public/index.html`.
