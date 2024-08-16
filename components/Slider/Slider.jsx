import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from '../../Config/FirebaseConfig';

const Slider = () => {

    const [sliders, setSliders] = useState([])

    const getSlider = async () => {
        setSliders([])
        const response = await getDocs(collection(dataBase, "Slider"))
        response.forEach((doc) => {
            console.log(doc.data());
            setSliders(sliders => [...sliders, doc.data()])

        })
    }

    useEffect(() => {
        getSlider()
    }, [])

    return (
        <View style={{marginTop:20}}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={sliders}
                renderItem={({ item, index }) => (
                    <View>
                        <Image source={{ uri: item?.imageUrl }} style={styles?.sliderImage} />
                    </View>
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get("screen").width * 0.9,
        height: 170,
        borderRadius: 15,
        marginRight:15
    }
})


export default Slider