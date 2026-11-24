import Link from 'next/link';
import { MariaPrea, Mensagem } from "./componentes";
import Sobre from "./sobre/page";

export default function NovaRotaHome() {
    return (
        <div className="container">
            <h1>Nova Rota, Nova Página</h1>
            <p>Demonstração de componentes exportados e reutilizáveis:</p>

            <MariaPrea />

            <Sobre />

            <Mensagem texto="Estou aprendendo Next.js!" />
            <Mensagem texto="Agora sei utilizar componentes com parâmetros!" />
            <Mensagem texto="Esta é a Receita 14!" />

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/" className="btn btn-secondary">
                    ← Voltar ao Início
                </Link>
                <Link href="/novarota/contato" className="btn">
                    Ir para Contato →
                </Link>
            </div>
        </div>
    );
}
