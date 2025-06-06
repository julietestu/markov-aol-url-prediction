export function buildTransitionMatrix(data) {
    const transitions = {};

    data.forEach(({ query, url, weight }) => {
        if (!transitions[query]) transitions[query] = {};
        transitions[query][url] = (transitions[query][url] || 0) + weight;
    });

    const matrix = {};
    for (const query in transitions) {
        const total = Object.values(transitions[query]).reduce((a, b) => a + b, 0);
        matrix[query] = {};
        for (const url in transitions[query]) {
            const percent = (transitions[query][url] / total) * 100;
            matrix[query][url] = percent;
        }
    }

    return matrix;
}

export function buildPageToPageMatrix(data) {
    const transitions = {};
    const grouped = data.reduce((acc, row) => {
        acc[row.anonID] = acc[row.anonID] || [];
        acc[row.anonID].push(row);
        return acc;
    }, {});

    Object.values(grouped).forEach(userRows => {
        const sorted = userRows.sort((a, b) => new Date(a.queryTime) - new Date(b.queryTime));
        for (let i = 0; i < sorted.length - 1; i++) {
            const from = sorted[i].url;
            const to = sorted[i + 1].url;
            if (!from || !to || from === to) continue;

            if (!transitions[from]) transitions[from] = {};
            transitions[from][to] = (transitions[from][to] || 0) + 1;
        }
    });

    const matrix = {};
    for (const from in transitions) {
        const total = Object.values(transitions[from]).reduce((a, b) => a + b, 0);
        matrix[from] = {};
        for (const to in transitions[from]) {
            matrix[from][to] = (transitions[from][to] / total) * 100;
        }
    }

    return matrix;
}