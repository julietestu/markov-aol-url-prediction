import fs from "fs";

export function loadData(filePath) {
    try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const lines = raw.split("\n");
        const data = [];

        for (const line of lines) {
            const [anonID, query, queryTime, itemRank, clickURL] = line.split("\t");
            if (!query) continue;

            const q = query.toLowerCase().trim();
            const url = clickURL ? clickURL.toLowerCase().trim() : null;
            const rank = parseInt(itemRank);
            const weight = isNaN(rank) || rank <= 0 ? 1 : 1 / rank;

            if (q.includes(".com") || q.includes(".net") || q.startsWith("http")) continue;
            if (!url || url === "") continue;

            data.push({ query: q, url, weight, anonID, queryTime });
        }

        return data;
    } catch (err) {
        console.error("Erreur de lecture :", err.message);
        return [];
    }
}