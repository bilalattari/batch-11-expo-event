
import { ThemedText } from "@/components/ThemedText";
import { EventInterface } from "@/constants/Interface";
import { Image, View, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";


export default function EventCard({ item }: { item: EventInterface }) {
    const colorScheme = useColorScheme()
    const borderColor = useThemeColor({}, 'background')
    return (
        <ThemedView style={{
            borderRadius: 7,
            borderColor: borderColor,
            borderWidth: 1,
            overflow: "hidden",
            flex: 1
        }}>
            <Image source={{ uri: item.thumbnail }}
                style={{ height: 200, resizeMode: "cover" }} />

            <View style={{ gap: 5, padding: 10 }}>
                <ThemedText numberOfLines={1} type="subtitle">{item.title}</ThemedText>
                <ThemedText numberOfLines={2} type="default">{item.description}</ThemedText>
            </View>


        </ThemedView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})