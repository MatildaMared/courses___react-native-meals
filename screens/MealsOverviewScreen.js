import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";

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

	return (
		<View style={styles.container}>
			<MealsList meals={displayedMeals} />
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
