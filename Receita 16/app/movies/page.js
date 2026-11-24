import Link from 'next/link';

export default async function Movies({ searchParams }) {
    // 1. Obtendo o parâmetro da busca (padrão 'bagdad' conforme o enunciado da Receita)
    const params = await searchParams;
    const titleSearchKey = params?.titleSearchKey || 'bagdad';

    // 2. Requisição assíncrona para a API externa (OMDb API)
    let movies = [];
    let errorMessage = null;

    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`);
        const data = await res.json();

        if (data.Response === 'True' && data.Search) {
            movies = data.Search;
        } else {
            errorMessage = data.Error || 'Nenhum filme encontrado.';
        }
    } catch (err) {
        errorMessage = 'Erro ao conectar com a API de filmes.';
    }

    return (
        <div>
            {/* Cabeçalho e Caixa de Pesquisa */}
            <div className="search-box">
                <div>
                    <h1 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>Pesquisa de Filmes</h1>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                        Resultados obtidos via Server-Side Fetching para o termo: <strong>"{titleSearchKey}"</strong>
                    </p>
                </div>

                {/* Formulário com input para refinar a busca */}
                <form action="/movies" method="GET" className="search-form">
                    <input 
                        type="text" 
                        name="titleSearchKey" 
                        defaultValue={titleSearchKey}
                        placeholder="Digite o título do filme..." 
                        className="search-input"
                    />
                    <button type="submit" className="btn">
                        Buscar
                    </button>
                </form>

                {/* Atalhos rápidos de busca */}
                <div className="quick-tags">
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Sugestões:</span>
                    <Link href="/movies?titleSearchKey=bagdad" className="quick-tag">Bagdad (Padrão)</Link>
                    <Link href="/movies?titleSearchKey=batman" className="quick-tag">Batman</Link>
                    <Link href="/movies?titleSearchKey=matrix" className="quick-tag">Matrix</Link>
                    <Link href="/movies?titleSearchKey=avatar" className="quick-tag">Avatar</Link>
                    <Link href="/movies?titleSearchKey=spider-man" className="quick-tag">Spider-Man</Link>
                </div>
            </div>

            {/* Listagem de Filmes */}
            {errorMessage ? (
                <div className="container" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <p style={{ color: '#f87171', fontSize: '1.1rem', marginBottom: '16px' }}>⚠️ {errorMessage}</p>
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
