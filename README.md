# Test technique

## Run the project

Please run the API [Here](https://github.com/julieprunaret/Handmade-API-for-Graph)

in your terminal (on the port 3000)

```
npm run devStart
```

Please run the Application

in your terminal

```
npm run dev
```

## Description

Le but de ce test est d'évaluer les compétences du candidat en tant que Frontend Engineer
JavaScript. Le candidat devra créer une application web permettant de visualiser un graphe de
type "network", comprenant des noeuds et des liens. Les informations sur les liens et les noeuds
seront fournies sous forme de fichiers JSON.

## Contraintes techniques

- La stack imposée est la suivante:
  - Typescript
  - React
  - Vite
  - Redux
  - D3.js
- Le candidat devra utiliser les fichiers JSON fournis pour créer et visualiser le graphe.
- Le candidat est libre de choisir l'implémentation et le design graphique de l'application.
- Le candidat devra initialiser un dépôt GitHub au début du test et y pousser son avancement.

## Tâches à réaliser

- [ ] Créer une application React avec Vite et Typescript
- [ ] Créer un store Redux
- [ ] Créer un composant React permettant de visualiser le graphe
- [ ] Utiliser d3.js pour créer et afficher le graphe à l'aide des données fournies
- [ ] Chaque noeud doit être représenté par un cercle, les informations du noeud doivent êtres
      affiché de la manière dont le candidat le souhaite
- [ ] Chaque lien doit être représenté par une ligne reliant deux noeuds (certain lien peuvent
      être lié à un noeuds qui n'existe pas, c'est au candidat de gérer ce type de cas)

## Données fournies

- `links.json` - Contient les informations sur les liens entre les noeuds
- `nodes.json` - Contient les informations sur les noeuds

## Critères d'évaluation

- Respect des contraintes techniques et des tâches à réaliser
- Qualité du code (propreté, maintenabilité, performance, etc.)
- Qualité des classes et des méthodes (nommage, construction, etc.)
- Qualité de l'interface utilisateur (design, ergonomie, accessibilité, etc.)
- Qualité de la documentation (README, commentaires, etc.)
- Qualité de l'expérience utilisateur (fluidité, réactivité, etc.)
- Régularité des commits et leurs messages (clarté, concision, etc.)

## Temps de réalisation

Le temps de réalisation n'est pas fournis volontairement, pour que le candidat estime par lui même le temps
nécessaire à la réalisation du test et fournir un résultat qui lui semble satisfaisant.
