import React from 'react';
import '../Login/style.css';
import Logo from './LogoLogin'

export default function Reset() {
    return (
        <div id="container">
        <div id="senha2"c class="display-flex">
        <Logo />                                                               
            <h3>Recuperação de senha</h3>
            <label for="email" ><h3>Digite seu email: </h3></label>                               
            <input id="email" type="email" name="email" placeholder="Email " /> 
            <button class="c-button c-button--gooey"> Recuperar
                <div class="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
                </div>
              </button>
                                                                                
                        
        </div>   
    </div>
    )
}