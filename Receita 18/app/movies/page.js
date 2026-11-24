import Link from 'next/link';

export default async function Movies({ searchParams }) {
    // 1. Obtendo os parâmetros da busca enviados pelo <Form>
    const params = await searchParams;
    const titleSearchKey = params?.titleSearchKey || 'bagdad';
    const yearSearchKey = params?.yearSearchKey || '';

    // 2. Montando a URL da API do OMDb com o parâmetro de ano adicional (Exercício 1)
    let apiUrl = `http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`;
    if (yearSearchKey) {
        apiUrl += `&y=${encodeURIComponent(yearSearchKey)}`;
    }

    // 3. Requisição assíncrona
    let movies = [];
    let errorMessage = null;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.Response === 'True' && data.Search) {
            movies = data.Search;
        } else {
            errorMessage = data.Error || 'Nenhum filme encontrado para os filtros informados.';
        }
    } catch (err) {
        errorMessage = 'Erro de conexão com a API externa.';
    }

    return (
        <div>
            {/* Feedback da Busca Atual */}
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#94a3b8' }}>
                    Termo pesquisado: <strong style={{ color: '#38bdf8' }}>"{titleSearchKey}"</strong>
                    {yearSearchKey && (
                        <span> • Ano: <strong style={{ color: '#38bdf8' }}>{yearSearchKey}</strong></span>
                    )}
                </p>
                {movies.length > 0 && (
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        {movies.length} títulos retornados
                    </span>
                )}
            </div>

            {/* Listagem de Filmes ou Mensagem de Erro */}
            {errorMessage ? (
                <div className="container" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <p style={{ color: '#f87171', fontSize: '1.1rem', marginBottom: '16px' }}>
                        ⚠️ {errorMessage}
                    </p>
                    <Link href="/movies?titleSearchKey=bagdad" className="btn">
                        Voltar para a busca padrão ("bagdad")
                    </Link>
                </div>
            ) : (
                <div className="movies-grid">
                    {movies.map((m) => (
                        <div key={m.imdbID} className="movie-card">
                            <div className="poster-container">
                                {m.Poster && m.Poster !== 'N/A' ? (
                                    <img 
                                        src={m.Poster} 
                                        alt={`Pôster de ${m.Title}`} 
                                        className="poster-img"
                                    />
                                ) : (
                                    <div className="poster-placeholder">
                                        📷 Sem Pôster Disponível
                                    </div>
                                )}
                            </div>
                            <div className="movie-info">
                                <h3 className="movie-title">{m.Title}</h3>
                                <div className="movie-meta">
                                    <span className="badge-year">{m.Year}</span>
                                    <span className="badge-type">{m.Type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
