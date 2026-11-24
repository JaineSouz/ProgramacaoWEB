import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Viva Santana!</h1>
            <p>Bem-vindo à página inicial da Receita 14!</p>
            <Link href="/novarota" className="btn">
                Ir para Nova Rota →
            </Link>
        </div>
    );
}
