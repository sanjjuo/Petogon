import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import PetList from '../../components/PetList/PetList'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'

const HomeTab = () => {
  return (
    <View style={styles.container}>

      {/* {header} */}

      <Header />

      {/* slider */}

      <Slider />

      {/* category , list of pets*/}

      <PetList />

      {/* add new pet option */}

      <TouchableOpacity style={styles.view}>
        <MaterialIcons name="pets" size={18} color={Colors.PRIMARY} />
        <Text style={{
          fontFamily:"outfit-medium",
          fontSize:18,
          color:Colors.PRIMARY,
        }}>Add new Pet</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  view:{
    display:"flex",
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    padding:10,
    marginTop:20,
    backgroundColor:Colors.LIGHT_PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:20,
    borderStyle:"dashed",
    justifyContent:"center"
  }
})


export default HomeTab