import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Receita 15 - Layouts e Links',
    description: 'Trabalhando com Layouts e Links no Next.js',
};

export default function RootLayout({ children }) {
    console.log("montando layout");

    return (
        <html lang="pt-BR">
            <body>
                <header className="navbar">
                    <Link href="/" className="navbar-brand">
                        ⚡ Next.js App
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Início</Link>
                        <Link href="/novarota" className="nav-link">Nova Rota</Link>
                        <Link href="/novarota/sobre" className="nav-link">Sobre</Link>
                        <Link href="/novarota/contato" className="nav-link">Contato</Link>
                    </nav>
                </header>

                <main className="main-wrapper">
                    {children}
                </main>
            </body>
        </html>
    );
}
