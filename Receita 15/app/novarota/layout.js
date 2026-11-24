export default function NovaRotaLayout({ children }) {
    return (
        <div className="nested-layout-box">
            <header className="nested-header">
                <span className="nested-badge">Layout Aninhado</span>
                <h2>Área da Nova Rota</h2>
                <p>Este cabeçalho pertence ao layout exclusivo de <code>app/novarota</code> e é compartilhado com todas as suas sub-rotas.</p>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}
