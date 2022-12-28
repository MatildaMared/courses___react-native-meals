import { Text, View, StyleSheet } from "react-native";

function FavoritesScreen() {
	return (
		<View style={styles.container}>
			<Text>Favorites Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default FavoritesScreen;
