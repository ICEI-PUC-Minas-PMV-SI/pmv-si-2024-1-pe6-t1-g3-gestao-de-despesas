import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import QuitacaoDespesa from './QuitacaoDespesa';
import Gastos from './Gastos';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
  { key: 'gastos', title: 'Despesas', icon:'calculator' },
  { key: 'quitacao', title: 'Quitar', icon:'cash-check' },
]);

  const renderScene = BottomNavigation.SceneMap({
  gastos: Gastos,
  quitacao: QuitacaoDespesa,
});

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;