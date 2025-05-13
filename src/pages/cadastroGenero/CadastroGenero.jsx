import { useState } from "react";
import api from "../../Services/services";
import Swal from "sweetalert";

// Importação de Componentes:
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";

const CadastroGenero = () => {

    // Nome do Gênero
    const [genero, setGenero] = useState("");

    function alerta(icone, mesagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mesagem
        });
    }

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        //verificar se o input está vindo vazio
        if (genero.trim() !== "") {
            //try => tentar(o esperado)
            //catch => lança a exceção
            try {
                // Cadastrra um Genero: POST.
                await api.post("genero", { nome: genero });
                alerta("success", "Cadastro realizado com sucesso")
                setGenero("");
            } catch (error) {
                alerta("error", "Erro! entre em contato com o suporte!")
                console.log(error);
            }
        } else {
            alerta("warning", "Preencha o campo")
        }
    }

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    campoPlaceholder="Gênero"
                    //atribuindo a função:
                    funcCadastro={cadastrarGenero}
                    //atribuindo o valor do input:
                    valorInput={genero}
                    //atribuindo a função que atualiza o meu genero:
                    setValorInput={setGenero}
                />
                <Lista
                    nomeLista="Lista de Gênero"
                    visi_lista="none"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;
