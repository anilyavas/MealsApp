import { Text } from "react-native";
import { MealsList } from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";

export function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  return <MealsList items={favoriteMeals} />;
}
