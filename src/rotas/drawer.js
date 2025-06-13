import { createDrawerNavigator } from '@react-navigation/drawer';

import  Tab from './tab';
import Sobre    from '../sobre';

const DrawerNavigator = createDrawerNavigator();

export default function Navegacao() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Tab" component={Tab} />
      <DrawerNavigator.Screen name="Sobre" component={Sobre} />
    </DrawerNavigator.Navigator>
  );
};




