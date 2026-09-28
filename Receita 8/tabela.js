const montarTabela = dados => {

    const colunas = Object.keys(dados[0])

    const cabecalho = colunas.map(coluna =>
        `<th>${coluna}</th>`
    ).join("")

    const linhas = dados.map(item => {

        const valores = colunas.map(coluna =>
            `<td>${item[coluna]}</td>`
        ).join("")

        return `<tr>${valores}</tr>`

    }).join("")

    return `
        <table>
            <thead>
                <tr>
                    ${cabecalho}
                </tr>
            </thead>

            <tbody>
                ${linhas}
            </tbody>
        </table>
    `
}

export { montarTabela }