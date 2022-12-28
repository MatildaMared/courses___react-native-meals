import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen() {
	const route = useRoute();
	const navigation = useNavigation();
	const { categoryId } = route.params;

	const displayedMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId)
	);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [navigation, categoryId]);

	function renderMeal({ item }) {
		const mealItemProps = {
			id: item.id,
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
