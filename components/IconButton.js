import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ iconName, color, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => (pressed ? styles.pressed : null)}
		>
			<Ionicons name={iconName} size={24} color={color} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.5,
	},
});

export default IconButton;
