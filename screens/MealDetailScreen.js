import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
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
		<ScrollView style={styles.container}>
			<View style={styles.card}>
				<Image style={styles.image} source={{ uri: mealData.imageUrl }} />
				<View style={styles.content}>
					<Text style={styles.title}>{mealData.title}</Text>
					<MealDetails
						affordability={mealData.affordability}
						complexity={mealData.complexity}
						duration={mealData.duration}
					/>
					<View style={styles.list}>
						<Text style={styles.listTitle}>Ingredients</Text>
						{mealData.ingredients.map((ingredient) => (
							<Text style={styles.listItem} key={ingredient}>
								{ingredient}
							</Text>
						))}
					</View>
					<View style={styles.list}>
						<Text style={styles.listTitle}>Steps</Text>
						{mealData.steps.map((step) => (
							<Text style={styles.listItem} key={step}>
								{step}
							</Text>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	image: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	card: {
		backgroundColor: "white",
		borderRadius: 8,
	},
	content: {
		padding: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	list: {
		marginBottom: 16,
	},
	listTitle: {
		fontWeight: "bold",
		marginBottom: 8,
	},
	listItem: {
		marginLeft: 16,
		marginBottom: 4,
	},
});

export default MealsDetailScreen;
