import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<>
			<StatusBar style="light" />
			<FavoritesContextProvider>
				<Drawer.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#202020" },
						headerTintColor: "#fff",
						sceneContainerStyle: { backgroundColor: "#373737" },
						headerShadowVisible: false,
						drawerContentStyle: {
							backgroundColor: "#202020",
						},
						drawerActiveTintColor: "#fff",
						drawerInactiveTintColor: "#aaa",
					}}
				>
					<Drawer.Screen
						name="Categories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
							drawerIcon: ({ color }) => (
								<Ionicons name="list" size={16} color={color} />
							),
						}}
					/>
					<Drawer.Screen
						name="Favorites"
						component={FavoritesScreen}
						options={{
							drawerIcon: ({ color }) => (
								<Ionicons name="heart" size={16} color={color} />
							),
						}}
					/>
				</Drawer.Navigator>
			</FavoritesContextProvider>
		</>
	);
}

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
						headerShadowVisible: false,
					}}
				>
					<Stack.Screen
						name="DrawerScreen"
						component={DrawerNavigator}
						options={{
							title: "All Categories",
							headerShown: false,
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
