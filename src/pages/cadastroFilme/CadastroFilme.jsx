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

    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    const [listaFilme, setListaFilme] = useState([]);

    function alertar(icone, mesagem) {
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

    // Cadastrar Filme.
    async function cadastrarFilme(e) {
        e.preventDefault();
        //tratemento de exceção
        if (filme.trim() !== "") {

            try {
                await api.post("filme", { titulo: filme, idGenero: genero })
                alertar("success", "Sucesso! Cadastro realizado com sucesso")
                setFilme("");
                setGenero("");
            } catch (error) {
                console.log(error);
            }

        } else {
            alertar("error", "Erro! Preencha o campo")
        }
        // alert("aaaaaaaa");
    }

    // Listar Gênero.
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Listar Filme.
    async function listarFilme() {
        try {
            const resposta = await api.get("filme")
            setListaFilme(resposta.data);
        } catch (error) {
            console.log();
        }
    }

    useEffect(() => {
        listarGenero();
        listarFilme();
    }, []);



    // Return.
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
                    //atribuindo a função que atualiza o meu genero:
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista
                    nomeLista="Lista de Filmes"
                    tipoLista="filme"
                    lista={listaFilme}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;