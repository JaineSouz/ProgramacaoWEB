import Link from 'next/link';

export default function Contato() {
    return (
        <div className="container">
            <h1>Contato</h1>
            <p>Esta é a página de contato da aplicação.</p>

            <Link href="/novarota" className="btn btn-secondary">
                ← Voltar para Nova Rota
            </Link>
        </div>
    );
}
