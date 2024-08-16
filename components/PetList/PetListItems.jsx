import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PetListItems = ({ pet }) => {

    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.push({
                pathname:"/Pet-Details/PetDetails",
                params:pet,
            })}
            style={styles.view}>
            <Image source={{ uri: pet?.imageUrl }} style={styles.image} />
            <Text style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                fontSize: 17,
                paddingBottom: 10
            }}>{pet?.name}</Text>

            <View style={styles.container}>
                <Text style={{
                    fontFamily: "outfit",
                    color: Colors.GRAY,
                }}>{pet?.breed}</Text>
                <Text style={{
                    fontFamily: "outfit",
                    color: Colors.PRIMARY,
                    paddingHorizontal: 2,
                    borderRadius: 10,
                    fontSize: 11,
                    backgroundColor: Colors.LIGHT_PRIMARY
                }}>{pet?.age} YRS</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 5,
        marginRight: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        marginBottom:15
    },
    image: {
        width: 150,
        height: 120,
        borderRadius: 10,
        // objectFit: "fill"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})


export default PetListItems