# Markov AOL URL Prediction
Ce projet propose une analyse de navigation web fondée sur les chaînes de Markov, appliquée au jeu de données public AOL User Session Collection (500K sessions).

## Objectif
L'objectif est de prédire, à partir d'une requête utilisateur :
- Les pages web les plus susceptibles d'être visitées
- Les parcours de navigation les plus probables à partir d'une page donnée

Deux types de simulation de navigation sont proposés :
- Version déterministe : suit les transitions de probabilité maximale
- Version aléatoire pondérée : effectue des tirages selon les probabilités observées

## Données utilisées
Les données proviennent du jeu de données suivant :
[AOL User Session Collection - 500K](https://www.kaggle.com/datasets/dineshydv/aol-user-session-collection-500k)
Le fichier `user_sessions.txt` étant trop volumineux pour GitHub (>100 Mo), il doit être téléchargé manuellement et placé dans le répertoire suivant :
markov-predict/data/user_sessions.txt


## Dépendances
Le projet utilise les bibliothèques suivantes :
- `ramda` : pour la manipulation fonctionnelle des objets et tableaux
- `readline` : pour l'interaction utilisateur en ligne de commande (native dans Node.js)

## Fonctionnalités

- Affichage des pages les plus consultées après une requête
- Simulation d’un parcours utilisateur selon deux logiques : déterministe ou aléatoire pondérée
- Affichage clair des chemins de navigation avec pourcentages de transition
- Construction de matrices de transition Query → URL et URL → URL
- Analyse Markov de premier ordre

## Structure du projet
```
src/
├── loadData.js          (Chargement et nettoyage des données)
├── transitionMatrix.js  (Construction des matrices de transition)
├── pathSimulation.js    (Génération des parcours déterministes et aléatoires)
├── display.js           (Affichage formaté des résultats)
└── main.js              (Point d'entrée principal)
```



## Installation et exécution

1. Cloner le dépôt :
git clone https://github.com/julietestu/markov-aol-url-prediction.git
cd markov-aol-url-prediction

2. Installer les dépendances :
npm install

3. Télécharger le fichier `user_sessions.txt` depuis Kaggle et le placer dans `data/`.

4. Lancer le programme :
5. node src/main.js


## Auteurs
Ce projet a été réalisé par Julie Testu et Victor Lancelin. 

## Note
Ce projet a été réalisé dans le cadre d'un travail académique visant à illustrer l'application des chaînes de Markov à des données réelles de navigation web.




