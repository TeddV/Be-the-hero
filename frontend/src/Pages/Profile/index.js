import React from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../Assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi'; 
import './Styles.css'; 

export default function Profile(){
    return (
        <div className = "profile-container">
            <header>
                <img src = {logoImg} alt = "Be the Hero"/>
                <span>Bem vindo</span>

                <Link className = "button" to = "/incidents/new">Cadastrar novo caso</Link>
                <button type = "button">
                    <FiPower size = {18} color = "#E02041"/>
                </button>
            </header>
                <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>Casos</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button tyoe = "button">
                            <FiTrash2 size = {20} color = "#a8a8b3" />
                        </button>
                    </li>
                </ul>
                <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>Casos</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button tyoe = "button">
                            <FiTrash2 size = {20} color = "#a8a8b3" />
                        </button>
                    </li>
                </ul>
                 <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>Casos</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button tyoe = "button">
                            <FiTrash2 size = {20} color = "#a8a8b3" />
                        </button>
                    </li>
                </ul>
                <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>Casos</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button tyoe = "button">
                            <FiTrash2 size = {20} color = "#a8a8b3" />
                        </button>
                    </li>
                </ul>
                <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>Casos</strong>
                        <p>Caso teste</p>

                        <strong>Descrição</strong>
                        <p>Descrição teste</p>

                        <strong>Valor</strong>
                        <p>R$ 120,00</p>

                        <button tyoe = "button">
                            <FiTrash2 size = {20} color = "#a8a8b3" />
                        </button>
                    </li>
                </ul>
            
        </div>
    );
}