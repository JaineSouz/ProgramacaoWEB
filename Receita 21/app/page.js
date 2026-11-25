import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Receita 19: Implementação de API Própria</h1>
            <p>
                Nesta receita, construímos nosso próprio <strong>API Endpoint</strong> interno no Next.js 
                utilizando o arquivo especial <code>app/api/searchMovies/route.js</code>.
            </p>

            <div style={{ margin: '28px 0', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/myApiMovies" className="btn" style={{ background: '#6366f1' }}>
                    Acessar Página que Consome Nossa API (/myApiMovies) →
                </Link>
                <a href="/api/searchMovies?titleSearchKey=bagdad" target="_blank" className="btn btn-secondary" rel="noreferrer">
                    Testar Retorno JSON no Navegador
                </a>
            </div>

            <div style={{ background: '#0f172a', padding: '22px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#818cf8', marginBottom: '10px' }}>O que foi implementado:</h3>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', lineHeight: '1.8' }}>
                    <li>
                        <strong>Route Handler (<code>route.js</code>):</strong> Criação da rota <code>/api/searchMovies</code> que responde a requisições HTTP GET retornando dados em JSON.
                    </li>
                    <li>
                        <strong>Client Component Adaptado:</strong> Página em <code>/myApiMovies</code> que faz o fetch para a nossa própria API interna em vez de consultar a OMDb diretamente pelo cliente.
                    </li>
                </ul>
            </div>
        </div>
    );
}
