import { MariaPrea, Mensagem } from "./componentes";
import Sobre from "./sobre/page";

export default function NovaRotaHome() {
    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Nova Rota, Nova Página</h1>
            <p>Os componentes abaixo estão aninhados dentro do layout especial da <code>novarota</code>:</p>

            <MariaPrea />

            <Sobre />

            <Mensagem texto="Estou aprendendo Next.js!" />
            <Mensagem texto="Agora sei utilizar componentes com parâmetros!" />
            <Mensagem texto="Esta é a Receita 15 com Layouts e Links!" />
        </div>
    );
}
