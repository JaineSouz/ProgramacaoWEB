import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Receita 16: Data Fetching I 🎬</h1>
            <p>
                Nesta receita, nossa aplicação consome dados em tempo real da <strong>OMDb API</strong> diretamente 
                a partir do servidor (Server-Side Data Fetching) utilizando <code>async/await</code> e <code>fetch</code> nativo do Next.js.
            </p>

            <div style={{ margin: '28px 0', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/movies" className="btn">
                    Explorar Catálogo de Filmes →
                </Link>
                <Link href="/movies?titleSearchKey=batman" className="btn" style={{ background: '#334155' }}>
                    Buscar "Batman" 🦇
                </Link>
                <Link href="/movies?titleSearchKey=matrix" className="btn" style={{ background: '#334155' }}>
                    Buscar "Matrix" 🕶️
                </Link>
            </div>

            <div style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '8px' }}>💡 O que foi implementado:</h3>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', lineHeight: '1.8' }}>
                    <li>Requisição assíncrona ao servidor externo (OMDb API).</li>
                    <li>Leitura dinâmica de parâmetros via <code>searchParams</code> na URL.</li>
                    <li>Renderização de lista com <code>Array.map()</code>.</li>
                    <li>Exibição dos cartazes/pôsteres originais dos filmes com tratamento para itens sem imagem.</li>
                </ul>
            </div>
        </div>
    );
}
