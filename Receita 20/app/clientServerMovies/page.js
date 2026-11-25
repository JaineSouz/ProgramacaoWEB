"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react"

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div className="container">
            <span className="nested-badge" style={{ background: '#6366f1' }}>
                Receita 20 • Server Actions
            </span>
            <h1 style={{ marginTop: '8px' }}>Chamando uma Server Action</h1>
            <p>
                Este Client Component importa e chama <code>searchMovies</code> como uma função comum.
                O código dela roda no servidor.
            </p>

            <div className="search-box">
                <MovieForm actionHandler={handleAction} />
            </div>

            {data.error && <p>⚠️ {data.error}</p>}
            {data.Response === "False" && <p>⚠️ {data.Error}</p>}
            {data.Search && data.Search.length > 0 && <MovieTable movies={data.Search} />}
        </div>
    )
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler} className="search-form">
            <input className="search-input" id="idTitleSearchKey" name="titleSearchKey" placeholder="Título do filme..." style={{ flex: 2 }} />
            <input className="search-input" name="yearSearchKey" placeholder="Ano (opcional)..." style={{ flex: 1 }} />
            <button className="btn" type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({ movies }) {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th style={{ width: '100px', textAlign: 'center' }}>Ano</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((m) => (
                    <tr key={m.imdbID}>
                        <td>{m.Title}</td>
                        <td style={{ textAlign: 'center' }}><span className="badge-year">{m.Year}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}