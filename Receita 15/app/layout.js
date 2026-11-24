import Link from 'next/link';

export const metadata = {
    title: 'Minha primeira aplicação',
    description: 'Meu primeiro projeto com Next.js',
};

export default function RootLayout({ children }) {
    console.log("montando layout");

    return (
        <html lang="pt-BR">
            <body>
                <nav>
                    <Link href="/">Início</Link> |
                    <Link href="/novarota">Nova Rota</Link> |
                    <Link href="/novarota/sobre">Sobre</Link> |
                    <Link href="/novarota/contato">Contato</Link> |
                </nav>

                {children}
            </body>
        </html>
    );
}