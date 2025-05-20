// import { Fragment } from "react";
import { useEffect, useState } from "react";

//importar o Sweet Alert:
import Swal from 'sweetalert2';

import api from "../../Services/services";

import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {

    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");

    // Alertar.
        function alertar(icone, mensagem) {
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
        }

    // Funcão para trazer os gêneros do meu select.
    async function listarGenero(id) {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    // TRY CATCH = Tratamento de Exceção.
    // Try => Tentar (o esperado).
    // Catch => Lança a exceção.

    async function cadastrarFilme() {
        if (filme.trim() !== "") {
            try {
                await api.post("filme", {titulo: filme, idGenero: genero});
                alertar("success", "Sucesso! Cadastro realizado com sucesso.")
                setFilme("");
                setGenero("");
            } catch (error) {
                console.log(error);
            }
        } else {
            alertar("error", "Erro! Preencha os campos.")
        }
    }
 
    useEffect(() => {
        listarGenero();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    campoPlaceholder="Filme"

                    lista={listaGenero}

                    funcCadastro={cadastrarFilme}

                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista
                    nomeLista="Lista de Filme"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;