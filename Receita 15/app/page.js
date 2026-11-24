import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Viva Santana!</h1>
            <p>Bem-vindo à página inicial da <strong>Receita 15</strong>!</p>
            <p>
                Nesta receita, o menu superior foi transferido para o <code>layout.js</code> principal, 
                garantindo que ele persista enquanto você navega entre as páginas sem recarregar a tela inteira.
            </p>
            <Link href="/novarota" className="btn">
                Explorar Nova Rota (Layout Aninhado) →
            </Link>
        </div>
    );
}
