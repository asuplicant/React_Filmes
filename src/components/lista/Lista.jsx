import "./Lista.css";

const Lista = () => {
    return(
        <section>
            <h1> Lista dos Filmes </h1>
            <hr/>

            <div className="tabela">
                <table>
                    {/* Cabeçalho da tabela: */}
                    <thead>
                        {/* tr => Table Row */}
                        <tr className="cabecalho"> 
                            {/* th => Table Head */}
                            <th> Nome </th>
                            <th> Gênero </th>
                            <th> Editar </th>
                            <th> Excluir </th>
                        </tr>
                    </thead>
                    {/* tbody => Corpo da Tabela */}
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;