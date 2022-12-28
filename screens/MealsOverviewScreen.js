import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen() {
	const route = useRoute();
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId)
	);

	function renderMeal({ item }) {
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};

		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMeal}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default MealsOverviewScreen;
