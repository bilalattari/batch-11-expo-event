import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Home() {
    return (
        <ThemedView style={styles.container}>

            <ThemedText type="title"
                style={{ textAlign: "center" }}>
                Home Tab
            </ThemedText>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})