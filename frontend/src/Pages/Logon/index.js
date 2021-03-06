import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './Styles.css';

import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src = {logoImg} alt = "Be The Hero"/>

                <form >
                    <h1>Faça seu logon</h1>
                    <input placeholder = "Sua ID"/>
                    <button className ="button" type = "submit">Entrar</button>

                    <Link className = "back-link" to = "/register">
                        <FiLogIn size={16} color= "#DC143C" /> 
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src = {heroesImg} alt = "Heroes"/>
        </div>
    );
}