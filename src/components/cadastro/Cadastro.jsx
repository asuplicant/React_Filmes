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
                        <input type="text" 
                        name="nome" 
                        placeholder={props.campoPlaceholder}
                        value={props.valorInput}

                        // Ao mudar o input, algo acontece.
                        // E => 
                            // Atualizar o ESTADO do pai ao digitar.
                        onChange = {(e) => props.setValorInput(e.target.value)}

                    />
                    </div>
                    <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id="">
                            <option  value="" disabled selected>Selecione</option>
                            <option value="">Feminino</option>
                            <option value="">Masculino</option>
                            <option value="">Outro</option>
                        </select>
                    </div>
                    <Botao nomeDoBotao="Cadastrar"/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
