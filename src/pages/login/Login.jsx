import Logo from "../../assets/img/logo.svg";
import "./Login.css";

const Login = () =>  {
    return (
        <main className= "main_login">
            <div className= "banner"></div>
            <section className="section_login">
             <img src={Logo} alt="Logo do Filmoteca" />
             <form action="">
                <h1>Login</h1>
                <div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="Email" name="Email" placeholder="Digite sua senha"/>
                    </div>
                    <div>
                        <label htmlFor="">Senha</label>
                        <input type="Password" name="Senha" placeholder="Digite sua senha" />
                    </div>
                </div>

                <button>Entrar</button>

                </form>
            </section>
        </main>
    )
}

export default Login;