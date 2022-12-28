import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
	id,
}) {
	const navigate = useNavigation();

	function pressHandler() {
		navigate.navigate("MealDetails", { mealId: id });
	}

	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.pressable,
					pressed ? { opacity: 0.75 } : null,
				]}
				onPress={pressHandler}
			>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration}min</Text>
					<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: "white",
		elevation: 2,
		shadowColor: "black",
		shadowOpacity: 0.15,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	pressable: {
		overflow: "hidden",
		borderRadius: 8,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		paddingTop: 16,
		paddingHorizontal: 16,
	},
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

export default MealItem;
