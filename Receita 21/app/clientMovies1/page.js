"use client";

import React, { useState, useCallback } from "react";

// ============================================================================
// COMPONENTE PRINCIPAL (HOME)
// ============================================================================
export default function Home() {
    console.log("-> Renderizando componente Pai: Home");

    // Estados da aplicação (React Hooks):
    const [resultMovies, setResultMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // Função de busca assíncrona executada diretamente no navegador (Client-side)
    // Usamos useCallback para que a referência da função não mude a cada render,
    // permitindo que o React.memo no MovieForm funcione perfeitamente (Desafio das Galáxias)
    const handleSearch = useCallback(async (titleSearchKey) => {
        if (!titleSearchKey || !titleSearchKey.trim()) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            const httpRes = await fetch(
                `http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`
            );
            const jsonRes = await httpRes.json();

            if (jsonRes.Response === "True" && jsonRes.Search) {
                setResultMovies(jsonRes.Search);
            } else {
                setResultMovies([]);
                setErrorMessage(jsonRes.Error || "Nenhum filme encontrado.");
            }
        } catch (error) {
            setResultMovies([]);
            setErrorMessage("Erro ao consultar a API de filmes no cliente.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="container" style={{ maxWidth: '900px', margin: '30px auto' }}>
            <div style={{ marginBottom: '24px' }}>
                <span className="nested-badge" style={{ background: '#10b981' }}>
                    Receita 18 • Client Component
                </span>
                <h1 style={{ fontSize: '1.8rem', marginTop: '8px', marginBottom: '6px' }}>
                    Pesquisa no Cliente (useState & Client Components) 🎬
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                    Nesta receita, as requisições acontecem diretamente no navegador do usuário usando o hook <code>useState</code>.
                </p>
            </div>

            {/* Componente 1: Formulário de Pesquisa */}
            <MovieForm onSearch={handleSearch} isLoading={isLoading} />

            {/* Componente 2: Tabela de Resultados */}
            <MovieTable movies={resultMovies} isLoading={isLoading} error={errorMessage} />
        </div>
    );
}

// ============================================================================
// COMPONENTE 1: FORMULÁRIO (MovieForm)
// DESAFIO DAS GALÁXIAS: Usamos React.memo para evitar que o formulário seja
// redesenhado toda vez que os resultados da pesquisa atualizarem!
// ============================================================================
export const MovieForm = React.memo(function MovieForm({ onSearch, isLoading }) {
    console.log("-> Renderizando componente Filho: MovieForm");

    // Exercício 1: Preservando o valor digitado no estado local para não zerar
    const [titleInput, setTitleInput] = useState("bagdad");

    // Exercício 3: Submissão via botão ou tecla <Enter> no formulário
    function handleSubmit(e) {
        e.preventDefault();
        onSearch(titleInput);
    }

    return (
        <form onSubmit={handleSubmit} className="search-box" style={{ background: '#0f172a', border: '1px solid #334155' }}>
            <div className="search-form">
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    type="text"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    placeholder="Digite o título do filme (ex: Batman, Matrix)..."
                    required
                    className="search-input"
                    style={{ flex: 1 }}
                />

                {/* Exercício 2: Desabilitar o botão enquanto a requisição estiver ocorrendo */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn"
                    style={{
                        minWidth: '140px',
                        opacity: isLoading ? 0.7 : 1,
                        cursor: isLoading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isLoading ? "Buscando... ⏳" : "Pesquisar 🔍"}
                </button>
            </div>

            <div className="quick-tags" style={{ marginTop: '4px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Atalhos:</span>
                {["bagdad", "batman", "matrix", "avatar", "avengers"].map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => {
                            setTitleInput(item);
                            onSearch(item);
                        }}
                        className="quick-tag"
                        style={{ border: 'none', cursor: 'pointer' }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </form>
    );
});

// ============================================================================
// COMPONENTE 2: TABELA DE FILMES (MovieTable)
// Exercício 4: Tabela bonificada com estilos CSS
// ============================================================================
export function MovieTable({ movies, isLoading, error }) {
    console.log("-> Renderizando componente Filho: MovieTable");

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#38bdf8' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Carregando dados da OMDb API...</p>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>A requisição está sendo processada no navegador.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '30px 20px', background: '#1e293b', borderRadius: '10px', border: '1px solid #ef4444' }}>
                <p style={{ color: '#f87171', fontSize: '1.1rem', margin: 0 }}>⚠️ {error}</p>
            </div>
        );
    }

    if (!movies || movies.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '30px 20px', color: '#64748b' }}>
                <p>Nenhum filme carregado. Digite um termo acima e clique em "Pesquisar"!</p>
            </div>
        );
    }

    return (
        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ width: '80px', textAlign: 'center' }}>Pôster</th>
                        <th>Título</th>
                        <th style={{ width: '100px', textAlign: 'center' }}>Ano</th>
                        <th style={{ width: '120px', textAlign: 'center' }}>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.imdbID}>
                            <td style={{ textAlign: 'center' }}>
                                {m.Poster && m.Poster !== "N/A" ? (
                                    <img
                                        src={m.Poster}
                                        alt={m.Title}
                                        style={{ width: '50px', height: '70px', objectFit: 'cover', borderRadius: '6px' }}
                                    />
                                ) : (
                                    <span style={{ fontSize: '1.5rem' }}>🎬</span>
                                )}
                            </td>
                            <td>
                                <strong style={{ color: '#f8fafc', fontSize: '1.05rem' }}>{m.Title}</strong>
                                <br />
                                <small style={{ color: '#64748b' }}>IMDb ID: {m.imdbID}</small>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <span className="badge-year">{m.Year}</span>
                            </td>
                            <td style={{ textAlign: 'center', textTransform: 'capitalize', color: '#94a3b8' }}>
                                {m.Type}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
