import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#202020" },
						headerTintColor: "#fff",
						contentStyle: { backgroundColor: "#373737" },
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
						}}
					></Stack.Screen>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
					></Stack.Screen>
					<Stack.Screen
						name="MealDetails"
						component={MealsDetailScreen}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
