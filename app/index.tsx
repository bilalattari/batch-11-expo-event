import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>

            <ThemedText type="title"
                style={{ textAlign: "center" }}>
                Welcome to OUR APP
            </ThemedText>

            <ThemedButton
                onPress={() => router.push('/login')}
                txt="Go To Login Page" />



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})