export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey") || "bagdad";
    const yearSearchKey = searchParams.get("yearSearchKey") || "";

    let apiUrl = `http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`;
    if (yearSearchKey) {
        apiUrl += `&y=${encodeURIComponent(yearSearchKey)}`;
    }

    try {
        const httpRes = await fetch(apiUrl);
        const jsonRes = await httpRes.json();
        return Response.json({ ...jsonRes });
    } catch (err) {
        return Response.json(
            { Response: "False", Error: "Erro ao consultar a base de filmes na API interna." },
            { status: 500 }
        );
    }
}
