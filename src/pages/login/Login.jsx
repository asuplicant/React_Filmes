import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () =>  {
    return (
        <main className= "main_login">
            <div className= "banner"></div>
            <section className="section_login">
             <img src={Logo} alt="Logo do Filmoteca" />
             <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="Email">Email: </label>
                        <input type="Email" name="Email" placeholder="Digite seu email"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="">Senha: </label>
                        <input type="Password" name="Senha" placeholder="Digite sua senha" />
                    </div>
                </div>
                    <Botao nomeDoBotao="Entrar"/>
                </form>
            </section>
        </main>
    )
}

export default Login;