import React from 'react';

import { Layout } from '@components/layout';
import { GameBoard } from '@components/widgets/game-board';
import { TextPanel } from '@components/widgets/text-panel';

import '@styles/global.scss';

function App() {
  return (
    <Layout>
      <div className='container main-wrapper'>
        <GameBoard />
        <TextPanel />
      </div>
    </Layout>
  );
}

export default App;
