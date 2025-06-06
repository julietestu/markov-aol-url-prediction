export function pickNextURL(probabilities) {
    const entries = Object.entries(probabilities);
    const total = entries.reduce((sum, [_, p]) => sum + p, 0);
    const r = Math.random() * total;

    let cumulative = 0;
    for (const [url, prob] of entries) {
        cumulative += prob;
        if (r <= cumulative) return url;
    }

    return entries.at(-1)[0];
}

export function generatePaths(matrix, startURL, steps = 3) {
    const deterministicPath = [{ url: startURL, prob: 100 }];
    const randomPath = [{ url: startURL, prob: 100 }];

    let currentDet = startURL;
    let currentRand = startURL;

    for (let i = 0; i < steps; i++) {
        const nextDet = matrix[currentDet];
        if (!nextDet) break;
        const [nextURL, prob] = Object.entries(nextDet).sort((a, b) => b[1] - a[1])[0];
        deterministicPath.push({ url: nextURL, prob });
        currentDet = nextURL;
    }

    for (let i = 0; i < steps; i++) {
        const nextRand = matrix[currentRand];
        if (!nextRand) break;
        const nextURL = pickNextURL(nextRand);
        const prob = nextRand[nextURL];
        randomPath.push({ url: nextURL, prob });
        currentRand = nextURL;
    }

    return { deterministicPath, randomPath };
}
