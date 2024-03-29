import 'react-native-gesture-handler';
import { Button, StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    sceneContainerStyle: { backgroundColor: "#3f2f25" },
    drawerContentStyle: { backgroundColor: "#351401" },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1",
  }}>
    <Drawer.Screen name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
      }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={'#351401'} />
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" }
        }}>
          <Stack.Screen name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" }
        }}>
          <Stack.Screen name='MealsCategories'
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
          />
          <Stack.Screen name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About the Meal"
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStartColor: "#24180f"
  },
});