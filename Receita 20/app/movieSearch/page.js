import Form from "next/form";
import Link from "next/link";

export default async function MovieForm() {
    return (
        <div className="container" style={{ maxWidth: '520px', margin: '40px auto' }}>
            <h1 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Buscar Filmes (Receita 17)</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px' }}>
                Formulário construído com o componente nativo <code>&lt;Form&gt;</code> do Next.js.
            </p>

            <Form action="/movies" className="search-form-vertical">
                {/* Campo 1: Título do filme */}
                <div className="form-group">
                    <label htmlFor="idTitleSearchKey">Título do Filme:</label>
                    <input 
                        id="idTitleSearchKey" 
                        name="titleSearchKey" 
                        placeholder="Ex: Batman, Matrix, Star Wars..." 
                        required 
                        className="search-input"
                    />
                </div>

                {/* Campo 2: Ano de produção (Exercício 1 da Receita 17) */}
                <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="idYearSearchKey">Ano de Lançamento (opcional):</label>
                    <input 
                        id="idYearSearchKey" 
                        name="yearSearchKey" 
                        placeholder="Ex: 2008, 1999..." 
                        className="search-input"
                    />
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                    <button type="submit" className="btn" style={{ flex: 1 }}>
                        Pesquisar Filmes 🔍
                    </button>
                    <Link href="/movies" className="btn btn-secondary">
                        Ver Todos
                    </Link>
                </div>
            </Form>
        </div>
    );
}
