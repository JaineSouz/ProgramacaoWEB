import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Minha aplicação Next.js</h1>

            <h2>Escolha uma rota:</h2>

            <Link href="/rota1">
                <button>Ir para Rota 1</button>
            </Link>

            <br /><br />

            <Link href="/rota2">
                <button>Ir para Rota 2</button>
            </Link>

            <br /><br />

            <Link href="/rota3">
                <button>Ir para Rota 3</button>
            </Link>
        </div>
    );
}