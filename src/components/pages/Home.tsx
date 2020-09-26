import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';

import SchoolList from 'containers/organisms/SchoolList';
import './Home.css';

const Home: FC = () => (
  <>
    <Helmet>
      <title>作品紹介</title>
    </Helmet>
    <header>
      <h1>作品紹介</h1>
    </header>
    <Container className="summary">
      <p>紹介。</p>
    </Container>
    <SchoolList />
  </>
);

export default Home;
