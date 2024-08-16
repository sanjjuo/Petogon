import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { useUser } from "@clerk/clerk-expo"
import Colors from '../../constants/Colors';

const Header = () => {

    const { user } = useUser()
    return (
        <View style={styles.header}>
            <View>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize: 18
                }}>Welcome,</Text>
                <Text style={{
                    fontFamily: "outfit-bold",
                    fontSize: 25,
                    color:Colors.PRIMARY
                }}>{user?.fullName}</Text>
            </View>
            <Image source={{ uri: user?.imageUrl }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 99
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})


export default Header