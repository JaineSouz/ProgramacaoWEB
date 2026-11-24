import { MariaPrea, Mensagem } from "./componentes";
import Sobre from "./sobre/page";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>

            <MariaPrea />

            <Sobre />

            <Mensagem texto="Estou aprendendo Next.js!" />
            <Mensagem texto="Agora sei utilizar componentes com parâmetros!" />
            <Mensagem texto="Esta é a Receita 14!" />
        </div>
    )
}