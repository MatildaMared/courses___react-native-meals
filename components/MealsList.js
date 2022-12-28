import { FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ meals }) {
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
		<FlatList
			data={meals}
			keyExtractor={(item) => item.id}
			renderItem={renderMeal}
		/>
	);
}

export default MealsList;
