import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Receita 21 - Rotas dinâmicas e SSG',
    description: 'Criando Route Handlers (route.js) com Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <Link href="/" className="navbar-brand" style={{ color: '#818cf8' }}>
                        API Web 21
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Início</Link>
                        <Link href="/myApiMovies" className="nav-link">Minha API (/myApiMovies)</Link>
                        <a href="/api/searchMovies?titleSearchKey=bagdad" target="_blank" className="nav-link" rel="noreferrer">
                            Ver JSON (/api/searchMovies)
                        </a>
                        <Link href="/clientMovies1" className="nav-link">Client Movies</Link>
                        <Link href="/clientServerMovies" className="nav-link">Server Actions</Link>
                        <Link href="/movie/tt0095801" className="nav-link">Filme (rota dinâmica)</Link>
                    </nav>
                </header>

                <main className="main-wrapper">
                    {children}
                </main>
            </body>
        </html>
    );
}
