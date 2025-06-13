import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Exemplos    from '../exemplos';
import Atividades from '../atividades';


const TabNavegation = createBottomTabNavigator();

export default function tab() {
  return (
    <TabNavegation.Navigator>
      <TabNavegation.Screen name="Exemplos" component={Exemplos} />
      <TabNavegation.Screen name="Atividades" component={Atividades} />
    </TabNavegation.Navigator>
  );


};

