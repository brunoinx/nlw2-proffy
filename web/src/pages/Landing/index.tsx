import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleheartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';

export default function Landing() {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;
      setConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Aulas"/>
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas
          <img src={purpleheartIcon} alt="coração roxo"/>
        </span>
      </div>
    </div>
  );
}