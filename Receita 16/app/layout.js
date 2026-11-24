import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Receita 16 - Data Fetching I',
    description: 'Consumo de API externa com Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <Link href="/" className="navbar-brand">
                        🎬 CineWeb
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Início</Link>
                        <Link href="/movies" className="nav-link">Pesquisar Filmes</Link>
                        <Link href="/novarota" className="nav-link">Nova Rota</Link>
                    </nav>
                </header>

                <main className="main-wrapper">
                    {children}
                </main>
            </body>
        </html>
    );
}
