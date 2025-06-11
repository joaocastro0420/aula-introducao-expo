import { createDrawerNavigator } from '@react-navigation/drawer';
import Atividades from '../atividades';
import Sobre    from '../sobre';

const DrawerNavigator = createDrawerNavigator();

export default function ContainerNavegacao() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Atividades" component={Atividades} />
      <DrawerNavigator.Screen name="Sobre" component={Sobre} />
    </DrawerNavigator.Navigator>
  );
}

const MyDrawer = createDrawerNavigator({
  screens: {
    Atividades,
    Sobre,
  },
});

