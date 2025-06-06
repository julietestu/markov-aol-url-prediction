export function displayResults(query, queryMatrix, pageToPageMatrix, generatePaths, steps = 3, minProb = 5) {
    const predictions = Object.entries(queryMatrix).sort((a, b) => b[1] - a[1]);

    console.log(`\nPages susceptibles d’être ouvertes :`);
    predictions.forEach(([url, prob], index) => {
        console.log(`${index + 1}. ${url} (${prob.toFixed(2)}%)`);
    });

    console.log(`\nExemples de parcours utilisateur possibles :`);
    predictions.filter(([_, prob]) => prob >= minProb).forEach(([url]) => {
        const { deterministicPath, randomPath } = generatePaths(pageToPageMatrix, url, steps);

        const detStr = deterministicPath.map((step, i, arr) => {
            if (i === 0) return `${step.url} (100%)`;
            const from = arr[i - 1].url;
            const to = step.url;
            const prob = pageToPageMatrix[from]?.[to] ?? 0;
            return `${to} (${prob.toFixed(2)}%)`;
        }).join(" → ");

        const randStr = randomPath.map((step, i, arr) => {
            if (i === 0) return `${step.url} (100%)`;
            const from = arr[i - 1].url;
            const to = step.url;
            const prob = pageToPageMatrix[from]?.[to] ?? 0;
            return `${to} (${prob.toFixed(2)}%)`;
        }).join(" → ");

        console.log(`\nDepuis ${url} :`);
        console.log(`Version déterministe : ${detStr}`);
        console.log(`Version aléatoire    : ${randStr}`);
    });
}
