import Form from "next/form";
import Link from "next/link";

export default function MoviesLayout({ children }) {
    return (
        <div>
            {/* 
                MINI-DESAFIO (Exercício 2 da Receita 17):
                O formulário fica no layout de /movies. 
                Ao submeter a pesquisa, o Next.js atualiza APENAS o {children} (os resultados),
                sem recarregar o formulário!
            */}
            <div className="search-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                        <span className="nested-badge" style={{ background: '#0284c7' }}>
                            Receita 17 • Layout com Formulário
                        </span>
                        <h1 style={{ fontSize: '1.6rem', marginTop: '6px', marginBottom: '4px' }}>
                            Pesquisa de Filmes
                        </h1>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>
                            Pesquise por título e ano. O formulário abaixo é persistente e não é recarregado na busca.
                        </p>
                    </div>
                </div>

                {/* Formulário com 2 campos (Exercício 1 da Receita 17) */}
                <Form action="/movies" className="search-form" style={{ marginTop: '12px' }}>
                    <div style={{ flex: '2', minWidth: '200px' }}>
                        <input 
                            type="text" 
                            name="titleSearchKey" 
                            placeholder="Título do filme (ex: Batman, Matrix)..." 
                            required 
                            className="search-input"
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ flex: '1', minWidth: '130px' }}>
                        <input 
                            type="text" 
                            name="yearSearchKey" 
                            placeholder="Ano (ex: 2008)" 
                            className="search-input"
                            style={{ width: '100%' }}
                        />
                    </div>

                    <button type="submit" className="btn">
                        Pesquisar 🔍
                    </button>
                </Form>

                {/* Atalhos Rápidos */}
                <div className="quick-tags" style={{ marginTop: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Exemplos:</span>
                    <Link href="/movies?titleSearchKey=bagdad" className="quick-tag">Bagdad (Padrão)</Link>
                    <Link href="/movies?titleSearchKey=batman&yearSearchKey=2008" className="quick-tag">Batman (2008)</Link>
                    <Link href="/movies?titleSearchKey=matrix&yearSearchKey=1999" className="quick-tag">Matrix (1999)</Link>
                    <Link href="/movies?titleSearchKey=spider-man" className="quick-tag">Spider-Man</Link>
                </div>
            </div>

            {/* Conteúdo dinâmico da pesquisa (apenas esta área é atualizada) */}
            <main>
                {children}
            </main>
        </div>
    );
}
