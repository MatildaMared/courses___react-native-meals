import { Pressable, View, Text, StyleSheet } from "react-native";

export function CategoryGridTile({ title, color }) {
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => [
					styles.pressable,
					pressed ? styles.pressed : null,
					{ backgroundColor: color },
				]}
			>
				<View style={styles.inner}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		backgroundColor: "white",
	},
	pressable: {
		flex: 1,
		borderRadius: 8,
	},
	pressed: {
		opacity: 0.5,
	},
	inner: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
	},
});

export default CategoryGridTile;
