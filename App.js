import { StatusBar } from "expo-status-bar";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351041" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3F2F25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            // const catId = route.params.categoryId;
            // return {
            // title: catId,
            // };
            //}}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              headerRight: () => {
                return <Text>In the header</Text>;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
