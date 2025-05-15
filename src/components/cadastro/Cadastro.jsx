import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Nome</label>
                        <input 
                            type="text" 
                            name="nome" 
                            placeholder={`Digite o nome do gênero`} 
                            value={props.valorInput}
                            //ao mudar o input algo acontece
                                //atualizar o estado do pai ao digitar
                                //targer está indo buscar o valor do "e"
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id="">
                            <option  value="" disabled selected>Selecione</option>
                            <option value=""> op1 </option>
                            <option value=""> op2 </option>
                            <option value=""> op2 </option>
                        </select>
                    </div>
                    <Botao nomeDoBotao="Cadastrar"/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;