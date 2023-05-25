import { createStackNavigator } from '@react-navigation/stack';
import EditCustomer from '../screens/EditCustomer';
import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Payment Detail" component={Payment} />
      <Stack.Screen name="Edit Customer" component={EditCustomer} />
    </Stack.Navigator>
  );
}

export default AppStack;