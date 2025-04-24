import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = () => {
    return(
        <section className="layout_grid listagem">
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
                        <tr className="item_lista">
                            <td> Coraline </td>
                            <td> Terror </td>
                            <td><img src={Editar} alt="Caneta" /></td>
                            <td><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;