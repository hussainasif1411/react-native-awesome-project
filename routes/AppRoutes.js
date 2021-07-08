import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../src/Login';
import Signup from '../src/Signup';
import Profile from '../src/Profile';

const Navigator = createStackNavigator(
    {
        Signup: Signup,
        Login: Login,
        Profile: Profile
    },
    {
        initialRouteName: 'Signup',
    }
);

const AppRoute = createAppContainer(Navigator);

export default AppRoute;