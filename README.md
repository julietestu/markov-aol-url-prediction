# Markov AOL URL Prediction

Projet d’analyse de navigation web basé sur les **chaînes de Markov**, utilisant les données de recherche AOL 500K.

L'objectif est de prédire :
Les **pages web les plus probables** à visiter après une recherche utilisateur
Les **chemins de navigation possibles** à partir d’une page web (en version déterministe ou aléatoire pondérée)

## Données utilisées
Les données proviennent du jeu de données public :
[AOL User Session Collection - 500K](https://www.kaggle.com/datasets/dineshydv/aol-user-session-collection-500k)

## Dépendances 
Ce projet utilise :
"Ramda" pour les transformations fonctionnelles 
"Readline" (inclus avec Node.js)

## Fonctionnalités 
Affichage des pages les plus visitées après une requête
Simulation déterministe : parcours avec les probabilités maximales
Simulation aléatoire pondérée : comportement réaliste d'un utilisateur 
Analyse des chaînes de Markov du 1er ordre (page-page)

## Structure du projet 
src/
  loadData.js : chargement et nettoyage des données 
  transitionMatrix.js : matrice Query - URL et URL - URL 
  pathSimulation.js : simulation de parcours déterministe et aléatoire 
  display.js : affichage formaté des résultats 
  main.js : point d'entrée (console) 

## Auteurs 
Julie Testu et Victor Lancelin 

## Note 
Ce projet est un cas d'étude pédagogique pour illustrer l'application des chaines de Markov sur des données réelles de navigation.




