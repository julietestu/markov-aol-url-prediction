import readline from "readline";
import { loadData } from "./src/loadData.js";
import { buildTransitionMatrix, buildPageToPageMatrix } from "./src/transitionMatrix.js";
import { pickNextURL, generatePaths } from "./src/pathSimulation.js";
import { displayResults } from "./src/display.js";

const filePath = "./data/user_sessions.txt";
const data = loadData(filePath);
const matrix = buildTransitionMatrix(data);
const pageToPageMatrix = buildPageToPageMatrix(data);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Recherche utilisateur : ", (query) => {
    const q = query.toLowerCase().trim();
    const queryMatrix = matrix[q];

    if (!queryMatrix) {
        console.log(`Aucune donnée pour la recherche : "${query}"`);
    } else {
        console.log(`\nRecherche utilisateur : "${query}"`);
        displayResults(query, queryMatrix, pageToPageMatrix, generatePaths);
    }

    rl.close();
});