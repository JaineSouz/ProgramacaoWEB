import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Receita 17 - Formulário de Pesquisa',
    description: 'Componente Form do Next.js e busca refinada',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <Link href="/" className="navbar-brand">
                        🎬 CineWeb 17
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Início</Link>
                        <Link href="/movies" className="nav-link">Pesquisa Integrada</Link>
                        <Link href="/movieSearch" className="nav-link">Formulário Isolado</Link>
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
