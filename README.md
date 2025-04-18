# Prédiction de navigation avec les chaînes de Markov 
Prédiction des URLs cliquées à partir des recherches initiales des utilisateurs en utilisant des chaînes de Markov sur la base de données AOL User Session Collection (500K).

# Objectifs 
Analyser le comportement des utilisateurs à partir de sessions de navigation (requêtes + clics), et prédire les prochaines page visitées grâce à une simulation avec chaînes de Markov. 

# Arborescence du projet 
markov-navigation-predictor/
│
├── data/              
│   └── user_sessions.txt
│
├── src/             
│   ├── index.js       
│   ├── loader.js    
│   ├── matrixBuilder.js
│   ├── simulator.js         
│   ├── exporter.js       
│   └── utils.js             
│
├── results/           
│   └── (à générer plus tard)
│
├── docs/                        
│   └── sujet_markov_fr.pdf
│
├── .gitignore
├── README.md
├── package.json
└── LICENSE

# Technologies utilisées 
- NodeJS
- JAvaScipt
- fs / path (built in Node)
- Git + GitHub

# Fonctionnalités prévues 
- Chargement et nettoyage des données brutes
- Construction d'une matrice de transition pondéré
- Simulation d'un parcours utilisateur (chaînes de Markov)
- Export des résultats en '.txt' et en '.csv'
- Visulation graphique (optionnel)

# Données 
Fichier utilisé : 'user_sessions.txt' 
Au format tabulé : anonyme ID, requête, date, heure, rang, URL cliquée. 
Source : Kaggle AOL Search Data : https://www.kaggle.com/datasets/dineshydv/aol-user-session-collection-500k

# Auteurs 
Julie Testu et Victor Lancelin 

# Licence 
Ce projet est distribué sous licence MIT. 
