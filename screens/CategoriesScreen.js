import { FlatList, View, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "./../data/dummy-data";

function CategoriesScreen({ navigation }) {
	function pressHandler() {
		navigation.navigate("MealsOverview");
	}

	function renderCategoryItem(itemData) {
		return (
			<CategoryGridTile
				onPress={pressHandler}
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	}

	return (
		<FlatList
			numColumns={2}
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
		/>
	);
}

export default CategoriesScreen;
