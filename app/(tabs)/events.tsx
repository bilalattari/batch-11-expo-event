import EventCard from "@/components/EventCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { EventInterface } from "@/constants/Interface";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";


export default function Events() {

    const [events, setEvents] = useState([])
    const [categories, setCategories] = useState([])
    const [chosen, setChosen] = useState(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getEvents()
    }, [chosen])

    useEffect(() => {
        getCategories()
    }, [])

    const getEvents = async () => {
        try {
            setLoading(true)
            let res: any = await fetch(`https://findyourfriend.vercel.app/api/events?category=${chosen ? chosen : ''}`)
            res = await res.json()
            setEvents(res.events)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)

        }
    }
    const getCategories = async () => {
        try {
            let res: any = await fetch('https://findyourfriend.vercel.app/api/categories')
            res = await res.json()
            setCategories(res.categories)
        }
        catch (err) {

        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={styles.container}>

                {
                    loading ?
                        <View>
                            <ActivityIndicator size={'large'}
                                style={{
                                    alignSelf: "center",
                                    marginVertical: 10
                                }} />
                        </View> : null
                }

                <FlatList
                    data={events}
                    ListHeaderComponent={<>
                        <FlatList
                            data={categories}
                            style={{
                                margin: 10,
                                marginTop: 20
                            }}
                            contentContainerStyle={{
                                justifyContent: "center",
                                gap: 10
                            }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(data) => data._id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => setChosen(item._id)}
                                        style={[{ gap: 5 },
                                        chosen == item._id && {
                                            backgroundColor: "#d9e3f0"
                                        }
                                        ]}>
                                        <Image source={{ uri: item.thumbnail }}
                                            style={{ height: 60, width: 60, borderRadius: 12 }} />
                                        <ThemedText
                                            style={{ textAlign: "center" }}
                                            type="default">{item.title?.slice(0, 4)}</ThemedText>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                    </>}
                    keyExtractor={(data) => data._id}
                    numColumns={2}
                    contentContainerStyle={{
                        gap: 10,
                        marginHorizontal: 10
                    }}
                    columnWrapperStyle={{ gap: 10 }}
                    renderItem={({ item }: { item: EventInterface, index: number }) => {
                        return <EventCard item={item} />
                    }}
                />


            </ThemedView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})