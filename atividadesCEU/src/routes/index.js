import React from 'react'


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// criar as telas p fazer os imports


const Tab = createMaterialTopTabNavigator();

function MyTabsUsuario() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Atividades" component={UsuarioAtividades} />
        <Tab.Screen name="Inscrições" component={UsuarioInscricoes} />
        
      </Tab.Navigator>
    );
  }

  function MyTabsAdministrador() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Turmas" component={AdministradorTurmas} />
        <Tab.Screen name="Gerenciamento" component={AdministradorGerenciamento} />
        
      </Tab.Navigator>
    );
  }

const StackScreens = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName={logged? 'Administrador' : 'Administrador'}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Cliente" component={MyTabsUsuario} />           
            <Stack.Screen name="Administrador" component={MyTabsAdministrador} />
        </Stack.Navigator>
    );
}

const Routes = () => {
    return (
        <NavigationContainer>
            
            <StackScreens />
        </NavigationContainer>
    );
    };


export default Routes
