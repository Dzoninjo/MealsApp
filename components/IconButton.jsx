import { Button, Image, Pressable, StyleSheet } from "react-native";

function IconButton({ source, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.pressable,
                { opacity: pressed ? 0.7 : 1 }]}
        >
            <Image source={source} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "white",
    },
});
