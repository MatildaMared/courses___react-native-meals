import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsDetailScreen() {
	const route = useRoute();
	const { mealId } = route.params;
	const navigation = useNavigation();
	const mealData = MEALS.find((meal) => meal.id === mealId);

	useLayoutEffect(() => {
		const mealTitle = mealData.title;

		navigation.setOptions({
			title: mealTitle,
		});
	}, [navigation, mealData]);

	return (
		<View style={styles.container}>
			<Text>The Meal Detail Screen!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default MealsDetailScreen;
