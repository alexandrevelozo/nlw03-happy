import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg'

import {
  PageLanding, 
  ContentWrapper, 
  Main, 
  Location 
} from './styles'


const Landing: React.FC = () => {
  return (
    <PageLanding>
        <ContentWrapper>
          <img src={logoImg} alt="logo happy" />

          <Main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </Main>

          <Location>
            <strong>Itanhaém</strong>
            <span>São Paulo</span>
          </Location>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </ContentWrapper>
      </PageLanding>
  );
}

export default Landing;