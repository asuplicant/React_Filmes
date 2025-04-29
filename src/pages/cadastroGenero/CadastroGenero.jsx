import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";

const CadastroGenero = () => {
    return(
        <>
        <Header/>
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade = "none"
                    campoPlaceholder="Digite o nome do Gênero"
                    />
                    <Lista
                    nomeLista="Lista de Gênero"
                    visi_lista="none"
                    />
            </main>
        <Footer/>
        </>
    )
}

export default CadastroGenero;