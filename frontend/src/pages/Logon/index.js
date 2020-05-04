import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

export default function Logon (){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be he Hero"/>
                <form>
                    <h1>Faça o seu cadastro</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color='#e02041'/>
                        Não tenho cadastro
                    </Link>
                </form>
          </section>

            <img src={HeroesImg} alt="Heroes"/>
        </div>


    );
}
