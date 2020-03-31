import React from 'react';

import './Styles.css'

import heroesImg from '../../Assets/heroes.png'
import logoImg from '../../Assets/logo.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src = {logoImg} alt = "Be The Hero"/>

                <form >
                    <h1>Faça seu logon</h1>
                    <input placeholder = "Sua ID"/>
                    <button type = "submit">Entrar</button> />

                    <a href='/register'>
                        Não tenho cadastro
                    </a>
                </form>

            </section>
            <img src = {heroesImg} alt = "Heroes"/>
        </div>
    );
}