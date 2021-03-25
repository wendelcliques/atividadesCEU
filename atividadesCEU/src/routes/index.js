import React, {useState, useEffect} from 'react'


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {isInitialized} from '../services/Welcome';
import {isLogged} from '../services/Auth';





import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AdministradorGerenciamento from '../pages/Administrador/AdministradorGerenciamento';
import AdministradorTurmas from '../pages/Administrador/AdministradorTurmas';
import UsuarioAtividades from '../pages/Usuario/UsuarioAtividades';
import UsuarioInscricoes from '../pages/Usuario/UsuarioInscricoes';



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

  const Stack = createStackNavigator();

const StackScreens = ({logged, initiated}) => {
    return (
        <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName={logged? ( initiated? "Usuario" : "Administrador") : "SignIn"}
        //initialRouteName="Administrador"
        >
           
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Usuario" component={MyTabsUsuario} />         
            <Stack.Screen name="Administrador" component={MyTabsAdministrador} />
        </Stack.Navigator>
    );
}

const Routes = () => {
 // const [isLoading, setIsLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function initialVerifications() {
      if (await isInitialized()) {
        setInitiated(true);
        console.log('routes initiated :: value: ', JSON.stringify(initiated));
      }
      if (await isLogged()) {
        setLogged(true);
      }
      //setIsLoading(false);
    }
    initialVerifications();
  })

    return (
        <NavigationContainer>
            
            <StackScreens logged={logged} initiated={initiated}/>
        </NavigationContainer>
    );
    };


export default Routes
