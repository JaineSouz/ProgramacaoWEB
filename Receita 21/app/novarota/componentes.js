export function MariaPrea() {
    return (
        <div className="card" style={{ borderLeftColor: '#f59e0b' }}>
            <h2>Morreu Maria Preá...</h2>
        </div>
    );
}

export function Saudacao() {
    return (
        <div className="card" style={{ borderLeftColor: '#10b981' }}>
            <h2>Bem-vindo à minha nova página!</h2>
        </div>
    );
}

export function Mensagem(props) {
    return (
        <div className="card" style={{ borderLeftColor: '#4f46e5' }}>
            <h2>{props.texto}</h2>
        </div>
    );
}
