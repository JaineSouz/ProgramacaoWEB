import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Receita 17: Formulário de Pesquisa 🔍</h1>
            <p>
                Nesta receita, substituímos a passagem manual de parâmetros pela URL pelo componente nativo 
                <code>&lt;Form&gt;</code> do Next.js (<code>import Form from 'next/form'</code>), que faz a navegação 
                no lado do cliente de forma automática e transparente.
            </p>

            <div style={{ margin: '28px 0', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/movies" className="btn">
                    Ir para Pesquisa Integrada (Layout) →
                </Link>
                <Link href="/movieSearch" className="btn btn-secondary">
                    Ver Formulário Isolado (/movieSearch)
                </Link>
            </div>

            <div style={{ background: '#0f172a', padding: '22px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#38bdf8', marginBottom: '10px' }}>🎯 Exercícios Resolvidos:</h3>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', lineHeight: '1.8' }}>
                    <li>
                        <strong>Exercício 1:</strong> Formulário ampliado com um segundo campo de filtro: <strong>Ano de Lançamento</strong> (<code>yearSearchKey</code>).
                    </li>
                    <li>
                        <strong>Exercício 2 (Mini-desafio):</strong> O formulário foi posicionado no <code>app/movies/layout.js</code>. Ao pesquisar, apenas o conteúdo dos filmes (<code>children</code>) é atualizado, preservando o formulário sem recarregar a tela!
                    </li>
                </ul>
            </div>
        </div>
    );
}
