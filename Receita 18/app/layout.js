import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Receita 18 - Client Components & useState',
    description: 'Data fetching no cliente com React useState e Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <Link href="/" className="navbar-brand">
                        ⚛️ ClientWeb 18
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Início</Link>
                        <Link href="/clientMovies1" className="nav-link">Client Movies (Receita 18)</Link>
                        <Link href="/movies" className="nav-link">Server Movies</Link>
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
