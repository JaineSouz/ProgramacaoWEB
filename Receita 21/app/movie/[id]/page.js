import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const all = await fetch("https://www.omdbapi.com/?apikey=f1cbc41e&s=lady").then((res) => res.json())
    return (all.Search || []).map((movie) => ({ id: movie.imdbID }))
}

export default async function Home({ params }) {
    const { id } = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${id}`).then((res) => res.json())

    if (movie.Response === "False") notFound()

    return (
        <div className="container">
            <span className="nested-badge" style={{ background: '#6366f1' }}>
                Receita 21 • Rota dinâmica
            </span>
            <h1 style={{ marginTop: '8px' }}>
                {movie.Title} <span className="badge-year">{movie.Year}</span>
            </h1>

            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginTop: '20px' }}>
                {movie.Poster && movie.Poster !== "N/A" ? (
                    <Image
                        src={movie.Poster}
                        alt={`Pôster de ${movie.Title}`}
                        width={300}
                        height={444}
                        style={{ borderRadius: '12px', height: 'auto' }}
                    />
                ) : (
                    <div style={{ fontSize: '4rem' }}>🎬</div>
                )}
                <div style={{ flex: 1, minWidth: '260px' }}>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                    <Link href="/myApiMovies" className="btn btn-secondary">← Voltar à busca</Link>
                </div>
            </div>
        </div>
    )
}