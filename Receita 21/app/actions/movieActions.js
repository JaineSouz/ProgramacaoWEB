'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")

    if (!titleSearchKey || !titleSearchKey.trim()) return { Search: [] }

    let apiUrl = `http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`
    if (yearSearchKey) {
        apiUrl += `&y=${encodeURIComponent(yearSearchKey)}`
    }

    try {
        const httpRes = await fetch(apiUrl)
        return await httpRes.json()
    } catch (err) {
        return { error: `Erro na requisição: ${err}` }
    }
}