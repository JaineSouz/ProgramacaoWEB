export const metadata = {
    title: 'Minha primeira aplicação',
    description: 'Meu primeiro projeto com Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}