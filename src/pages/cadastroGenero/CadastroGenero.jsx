import { useEffect, useState } from "react";

import api from "../../Services/services";

//importar o sweet alert:
import Swal from 'sweetalert2';

// importação de componentes:
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {

    // Só usamos UseState quando precisamos guarfdar uma informação que muda e o React
    // precisa acompanhar.
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);

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

    // Cadastrar Genero.
    async function cadastrarGenero(e) {
        e.preventDefault();
        //verificar se o input está vindo vazio
        if (genero.trim() !== "") {
            //try => tentar(o esperado)
            //catch => lança a exceção
            try {
                //cadastrar um gênero: post
                await api.post("genero", { nome: genero });
                alertar("success", "Cadastro realizado com sucesso!")
                setGenero("");
                listarGenero();
            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!")
                console.log(error);
            }
        } else {
            alertar("error", "Erro! Preencha o campo")
        }
    }

    //síncrono => Acontece simutâneamente
    //assincrono => Esperar algo/resposta para ir para outro bloco de código. 

    // Listar Genero.
    async function listarGenero() {
        try {
            //await -> Aguarde ter uma resp da solicitação
            const resposta = await api.get("genero");
            console.log(resposta.data);
            // console.log(resposta.data[3].idGenero);
            // console.log(resposta.data[3].nome);
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Excluir Genero
    async function excluirGenero(generoId) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`genero/${generoId.idGenero}`);
                alertar("success", "Gênero Excluido!")
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        });
    }
    listarGenero();


    // HOOKS: useEffect(
    // R: Effect :> Efeito colateral das coisas; Efeito a partir de uma alteração de estado.

    // Função: () :> {},
    // R: O efeito que quero que aconteça.

    // Dependência: []
    // R: Vazio (O Efeito acontece na primeira vez que a tela é "montada", ou quando for recarregada
    // com dependência (TODA vez que o STATE sofrer alteração, o EFEITO acontecerá).



    // function() = {} função
    // () => {} função anônima ou Arrow Function

    // Função de excluir o gênero;
    // TESTE: Validar o gênero.
    // * useEffect(<function>, <dependency>) *
    // useEffect(() => {
    //     console.log(genero);
    // },[genero]);

    // FIM DO TESTE.

    // Assim que a página renderizar, o método listarGenero() será chamado
    useEffect(() => {
        listarGenero();
    }, [genero])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    //Atribuindo a função:
                    funcCadastro={cadastrarGenero}
                    //Atribuindo o valor ao input:
                    valorInput={genero}
                    //Atribuindo a função que atualiza o meu genero:
                    setValorInput={setGenero}
                />
                <Lista
                    nomeLista="Lista de Gêneros"
                    visibilidade="none"
                    lista={listaGenero}
                    funcExcluir={excluirGenero}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;