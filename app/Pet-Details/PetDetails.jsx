import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const PetDetails = () => {

    const [readmore, setReadMore] = useState(true)

    const pet = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ""
        })
    }, [])

    useEffect(() => {
        console.log('User Image URL:', pet?.userImage);
        console.log('User Name:', pet?.userName);
    }, [pet?.userImage, pet?.userName]);


    return (
        <View>
            <ScrollView>
                <Image source={{ uri: pet?.imageUrl }} style={styles.image} />
                <View style={{ padding: 20 }}>
                    <View style={styles.view}>
                        <View>
                            <Text
                                style={{
                                    fontFamily: "outfit-bold",
                                    fontSize: 27,
                                }}>{pet?.name}</Text>

                            <Text style={{
                                fontFamily: "outfit",
                                fontSize: 16,
                                color: Colors.GRAY,
                            }}>{pet?.address}</Text>
                        </View>
                        <View>
                            <Ionicons name="heart-outline" size={30} color="black" />
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.info}>
                            <FontAwesome name="calendar" size={24} color={Colors.PRIMARY} style={styles.icon} />
                            <View style={styles.textview}>
                                <Text style={{
                                    fontFamily: "outfit",
                                    color: Colors.GRAY
                                }}>Age</Text>
                                <Text style={{
                                    fontFamily: "outfit-bold"
                                }}>{pet?.age}</Text>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <FontAwesome5 name="bone" size={24} color={Colors.PRIMARY} style={styles.icon} />
                            <View style={styles.textview}>
                                <Text style={{
                                    fontFamily: "outfit",
                                    color: Colors.GRAY
                                }}>Breed</Text>
                                <Text style={{
                                    fontFamily: "outfit-bold",
                                }} >{pet?.breed}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.info}>
                            <FontAwesome name="intersex" size={24} color={Colors.PRIMARY} style={styles.icon} />
                            <View style={styles.textview}>
                                <Text style={{
                                    fontFamily: "outfit",
                                    color: Colors.GRAY
                                }}>Sex</Text>
                                <Text style={{
                                    fontFamily: "outfit-bold"
                                }}>{pet?.sex}</Text>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <FontAwesome5 name="weight" size={24} color={Colors.PRIMARY} style={styles.icon} />
                            <View style={styles.textview}>
                                <Text style={{
                                    fontFamily: "outfit",
                                    color: Colors.GRAY
                                }}>Weight</Text>
                                <Text style={{
                                    fontFamily: "outfit-bold",
                                }} >{pet?.weight}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text style={{
                            fontFamily: "outfit-bold",
                            fontSize: 20
                        }}>{pet?.name}</Text>
                        <Text style={{
                            fontFamily: "outfit",
                            color: Colors.GRAY
                        }} numberOfLines={readmore ? 3 : 20}>{pet?.description}</Text>

                        {readmore &&
                            <Pressable onPress={() => setReadMore(false)}>
                                <Text style={{
                                    fontFamily: "outfit-medium",
                                    fontSize: 14,
                                    color: Colors.SECONDARY
                                }}>Read More</Text>
                            </Pressable>
                        }
                    </View>

                    <View style={styles.owner}>
                        <Image source={{ uri: pet?.userImage }} style={styles.ownerImage} />
                        <View style={{
                            flex:1,
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between"
                        }}>
                            <View>
                                <Text style={{
                                    fontFamily: "outfit-medium",
                                    fontSize: 17
                                }}>{pet?.userName}</Text>
                                <Text style={{
                                    fontFamily: "outfit",
                                    fontSize: 14,
                                    color: Colors.GRAY
                                }}>Pet Owner</Text>
                            </View>
                            <View>
                                <FontAwesome name="send" size={24} color="black" />
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400,
        objectFit: "cover",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    view: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    info: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        flex: 1
    },
    icon: {
        marginRight: 10,
        backgroundColor: Colors.LIGHT_PRIMARY,
        borderRadius: 10,
        padding: 10,
    },
    textview: {
        flex: 1
    },
    description: {
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderRadius: 15
    },
    owner: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        backgroundColor: Colors.WHITE
    },
    ownerImage: {
        width: 60,
        height: 60,
        objectFit: "fill",
        backgroundColor: Colors.LIGHT_PRIMARY,
        borderRadius: 99
    }
})


export default PetDetails