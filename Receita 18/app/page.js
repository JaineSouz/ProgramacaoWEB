import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Receita 18: Data Fetching e Client Components ⚛️</h1>
            <p>
                Nesta receita, exploramos os <strong>Client Components (<code>"use client"</code>)</strong>, 
                onde o código da requisição e o gerenciamento de estados acontecem diretamente no navegador do usuário 
                através do hook <code>useState</code> do React.
            </p>

            <div style={{ margin: '28px 0', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/clientMovies1" className="btn">
                    Ir para Client Movies (/clientMovies1) →
                </Link>
                <Link href="/movies" className="btn btn-secondary">
                    Comparar com Server Movies (/movies)
                </Link>
            </div>

            <div style={{ background: '#0f172a', padding: '22px', borderRadius: '12px', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#10b981', marginBottom: '10px' }}>🎯 Exercícios Resolvidos:</h3>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', lineHeight: '1.8' }}>
                    <li>
                        <strong>Exercício 1:</strong> O termo digitado é mantido no estado (não zera após a busca).
                    </li>
                    <li>
                        <strong>Exercício 2:</strong> Botão de pesquisa desabilitado com indicador <em>"Buscando... ⏳"</em> durante a requisição assíncrona.
                    </li>
                    <li>
                        <strong>Exercício 3:</strong> Submissão com clique no botão ou pressionando a tecla <code>&lt;Enter&gt;</code>.
                    </li>
                    <li>
                        <strong>Exercício 4:</strong> Tabela bonificada com estilos modernos, pôsteres e badges.
                    </li>
                    <li>
                        <strong>Exercício 5 (Desafio das Galáxias):</strong> Otimização com <code>React.memo</code> e <code>useCallback</code> para que apenas a tabela seja redesenhada quando os dados chegam, mantendo o formulário sem re-renderizar à toa!
                    </li>
                </ul>
            </div>
        </div>
    );
}
