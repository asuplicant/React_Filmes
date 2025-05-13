import { useState } from "react";
import api from "../../Services/services";
import Swal from "sweetalert";

// Importação de Componentes:
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";

const CadastroGenero = () => {

    const [genero, setGenero] = useState("");


    function alerta(icone, mensagem) {
        //  ---------- ALERTA  ----------

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
            title: mensagem
        });

        // ---------- FIM DO ALERTA  ----------
    }

    async function cadastrarGenero(e) {
        e.preventDefault();

        // Verificar se o input está vindo vazio.
        if (genero.trim() != "") {

            try {
                // Cadastrar um genero: POST.
                await api.post("genero", { nome: genero });
                alerta("sucess", "Cadastro realizado com sucesso!")
                setGenero("")
            } catch (error) {
                alerta("error", "Entre em contato com o suporte.")
                console.log(error);
            }
        } else {
            alerta("error", "O campo precisa estar preenchido!")
        }


        // Try => Tentar (o esperado).
        // Catch => Lança a exceção.

    }

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro do Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    //atribuindo a funcao:
                    funcCadastro={cadastrarGenero}

                    // atribuindo o valor do input:
                    valorInput={genero}

                    // atribuindo a funcao do que atualiza o meu genero 
                    setValorInput={setGenero}

                />

                <Lista
                    tituloLista="Gênero"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    );
}


export default CadastroGenero;