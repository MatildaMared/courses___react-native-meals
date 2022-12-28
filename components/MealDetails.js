import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
	return (
		<View style={styles.details}>
			<Text style={styles.detailItem}>{duration}min</Text>
			<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
			<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 16,
	},
	detailItem: {
		fontSize: 12,
		marginHorizontal: 4,
	},
});

export default MealDetails;
