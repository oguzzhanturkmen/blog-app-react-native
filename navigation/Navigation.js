import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import SignUp from "../screens/SignUp";
import SplashScreen from "../screens/SplashScreen";
import Feed from "../screens/Feed";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;