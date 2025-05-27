import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";
import React, { useState } from 'react';

const Lista = (props) => {

    const itensPorPagina = 5;
    const [paginaAtual, setPaginaAtual] = useState(1);

    const totalPaginas = Math.ceil((props.lista?.length || 0) / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const listaPaginada = props.lista?.slice(inicio, inicio + itensPorPagina);

    return (
        <section className="layout_grid listagem">
            <h1>{props.nomeLista}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* Cabeçalho da tabela: */}
                    <thead>
                        {/* tr => Table Row */}
                        <tr className="table_cabecalho">
                            {/* th => Table Head */}
                            <th> Nome </th>
                            <th style={{ display: props.visibilidade }}> Gênero </th>
                            <th> Editar </th>
                            <th> Excluir </th>
                        </tr>
                    </thead>
                    {/* tbody => Corpo da Tabela */}
                    <tbody >
                        {listaPaginada && listaPaginada.length > 0 ? (
                            listaPaginada.map((item) => (
                                <tr className="item_lista" key={props.tipoLista === "genero" ? item.idGenero : item.idFilme}>
                                    <td data-cell="Nome">
                                        {props.tipoLista === "genero" ? item.nome : item.titulo}
                                    </td>
                                    <td data-cell="Gênero" style={{ display: props.visibilidade }}> Terror 
                                        {item.genero?.nome}
                                    </td>
                                    <td data-cell="Editar">
                                        <img
                                            src={Editar}
                                            alt="caneta"
                                            onClick={() => { props.funcEditar(item) }}
                                        />
                                    </td>
                                    <td data-cell="Excluir">
                                        <img
                                            src={Excluir}
                                            alt="Lixeira"
                                            onClick={() => props.funcExcluir(item)}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">Nenhum gênero foi encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Paginação */}
            {props.lista && props.lista.length > itensPorPagina && (
                <div className="paginacao" style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <button onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))} disabled={paginaAtual === 1}>

                    </button>

                    <span style={{ margin: '0 1rem' }}>
                        Página {paginaAtual} de {totalPaginas}
                    </span>

                    <button onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))} disabled={paginaAtual === totalPaginas}>

                    </button>
                </div>
            )}
        </section>
    )
}

export default Lista;