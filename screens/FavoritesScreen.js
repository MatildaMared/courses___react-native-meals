import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
	const { ids } = useContext(FavoritesContext);
	const mealsToDisplay = MEALS.filter((meal) => ids.includes(meal.id));

	if (mealsToDisplay.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No favorites yet. Start adding some! 🤩</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<MealsList meals={mealsToDisplay} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	text: {
		marginTop: 16,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
	},
});

export default FavoritesScreen;
