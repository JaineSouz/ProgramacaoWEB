"use client";

import React, { useState, useCallback } from "react";

export default function MyApiMovies() {
    const [resultMovies, setResultMovies] = useState([]);
    const [titleInput, setTitleInput] = useState("bagdad");
    const [yearInput, setYearInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // O fetch agora chama a NOSSA PRÓPRIA API INTERNA (/api/searchMovies),
    // conforme exigido no Exercício da Receita 19!
    const handleSearch = useCallback(async (title, year) => {
        if (!title || !title.trim()) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            let endpoint = `/api/searchMovies?titleSearchKey=${encodeURIComponent(title)}`;
            if (year) {
                endpoint += `&yearSearchKey=${encodeURIComponent(year)}`;
            }

            const res = await fetch(endpoint);
            const data = await res.json();

            if (data.Response === "True" && data.Search) {
                setResultMovies(data.Search);
            } else {
                setResultMovies([]);
                setErrorMessage(data.Error || "Nenhum filme encontrado pela nossa API interna.");
            }
        } catch (err) {
            setResultMovies([]);
            setErrorMessage("Erro ao consultar nosso endpoint /api/searchMovies.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(titleInput, yearInput);
    }

    return (
        <div className="container" style={{ maxWidth: '900px', margin: '30px auto' }}>
            <div style={{ marginBottom: '24px' }}>
                <span className="nested-badge" style={{ background: '#6366f1' }}>
                    Receita 19 • API Própria (route.js)
                </span>
                <h1 style={{ fontSize: '1.8rem', marginTop: '8px', marginBottom: '6px' }}>
                    Consumindo Nossa Própria API Interna
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                    Este Client Component faz requisições para o endpoint interno <code>/api/searchMovies</code>, 
                    que por sua vez busca os dados no servidor e nos responde com JSON formatado.
                </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="search-box" style={{ background: '#0f172a', border: '1px solid #334155' }}>
                <div className="search-form">
                    <input
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        placeholder="Título do filme..."
                        required
                        className="search-input"
                        style={{ flex: 2 }}
                    />
                    <input
                        type="text"
                        value={yearInput}
                        onChange={(e) => setYearInput(e.target.value)}
                        placeholder="Ano (opcional)..."
                        className="search-input"
                        style={{ flex: 1 }}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn"
                        style={{ minWidth: '140px', background: '#6366f1' }}
                    >
                        {isLoading ? "Consultando API..." : "Buscar via API"}
                    </button>
                </div>

                <div className="quick-tags" style={{ marginTop: '4px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Atalhos:</span>
                    {["bagdad", "matrix", "batman", "avatar"].map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => {
                                setTitleInput(item);
                                handleSearch(item, yearInput);
                            }}
                            className="quick-tag"
                            style={{ border: 'none', cursor: 'pointer' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </form>

            {/* Tabela de Resultados */}
            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#818cf8' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Consultando /api/searchMovies...</p>
                </div>
            ) : errorMessage ? (
                <div style={{ textAlign: 'center', padding: '30px 20px', background: '#1e293b', borderRadius: '10px', border: '1px solid #ef4444' }}>
                    <p style={{ color: '#f87171', margin: 0 }}>⚠️ {errorMessage}</p>
                </div>
            ) : resultMovies.length > 0 ? (
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
                            {resultMovies.map((m) => (
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
                                        <span className="badge-year" style={{ background: '#6366f1' }}>{m.Year}</span>
                                    </td>
                                    <td style={{ textAlign: 'center', textTransform: 'capitalize', color: '#94a3b8' }}>
                                        {m.Type}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '30px 20px', color: '#64748b' }}>
                    <p>Digite os termos acima e clique em "Buscar via API" para testar o endpoint interno.</p>
                </div>
            )}
        </div>
    );
}
