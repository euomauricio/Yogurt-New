import React from 'react';
import '../Login/style.css';
import Logo from './LogoLogin'

export default function Register() {
    return (

        <div id="container">
            <div id="content" class="display-flex">
                
                <Logo />

                <br></br>

                <label for="nome" >Nome Completo:</label>
                <input id="nome" type="text" name="nome" placeholder="Nome Completo" />

                <label for="telefone" >Telefone:</label>
                <input id="telefone" type="text" name="telefone" placeholder="Telefone" />

                <label for="email" > Email:</label>
                <input id="email" type="email" name="email" placeholder="Email" />

                <label for="genero" >Gênero:</label>
                <input id="genero" type="text" name="genero" placeholder="Gênero " />

                <label for="data" >Data de Nascimento:</label>
                <input type="date" name="dataNascimento" id="data" placeholder="Data de Nascimento " />

                <label for="userName" >Nome de usuário:</label>
                <input id="userName" type="text" name="userName" placeholder="Nome de Usuário " />

                <label for="password" >Senha:</label>
                <input id="password" type="password" name="password" placeholder="Senha " />


                <br></br>
                <br></br>

                <button class="c-button c-button--gooey"> Cadastrar
                    <div class="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>

            </div>
        </div >
    )
}