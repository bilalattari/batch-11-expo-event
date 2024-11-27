
import { View, Text, Image } from 'react-native'

export default function Bykea() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "black"
        }}>
            <View style={{
                flex: 1,
            }} >
                <Image
                    style={{
                        height: "95%",
                        width: '100%',
                        resizeMode: "cover",
                    }}
                    source={{
                        uri: "https://images.unsplash.com/photo-1721332155567-55d1b12aa271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                    }}
                />
            </View>

            <View style={{
                height: 45,
                backgroundColor: 'brown',
                borderRadius: 7,
                marginTop: -15,
                zIndex: 12,
                marginBottom: 20,
                marginHorizontal: 12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <Text style={{ color: "#fff" }}>Icon 1</Text>
                <Text style={{ color: "#fff" }}>Icon 2</Text>
            </View>
            <View style={{
                flex: 2.5,
                gap: 10,
                margin: 10,
            }} >

                <View style={{
                    flex: 1,
                    gap: 10,
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                </View>
                <View style={{
                    flex: 1,
                    gap: 10,
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                </View>
                <View style={{
                    flex: 1,
                    gap: 10,
                    flexDirection: "row"
                }}>
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12 }} />
                </View>
            </View>

        </View>

    );
}
