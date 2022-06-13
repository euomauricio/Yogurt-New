import React from 'react';
import '../Login/style.css';
import Logo from './LogoLogin'

export default function Login() {
    return (
        <div id="container">

            <div id="content" class="display-flex">
                <Logo />
                <input id="telefone" type="text" name="text1" placeholder="Telefone ou Email " />
                <input id="senha" type="password" name="password" placeholder="Senha" />
                <button class="c-button c-button--gooey"> Entrar
                    <div class="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
                <a href="/ResetPassword"> <h4>Esqueceu sua senha?</h4></a>
            </div>
            <div id="cadastro" class="display-flex">
                <h3>Não tem uma conta? <a href="/Register" id="texto"> Cadastre-se</a> </h3>
            </div>
        </div>
    )
}