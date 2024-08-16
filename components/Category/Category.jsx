import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../../Config/FirebaseConfig'
import Colors from '../../constants/Colors'

const Category = ({category}) => {

    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Dogs")

    const getCategories = async() => {
        setCategoryList([])
        const response = await getDocs(collection(dataBase,"Category"))
        response.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()])
            
        })
    }

    useEffect(()=>{
        getCategories()
    },[])

  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:20
      }}>Category</Text>

      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({item, index})=>(
            <TouchableOpacity 
            onPress={()=>
                {setSelectedCategory(item.name);
                    category(item.name)
                }}
            style={{
                flex:1
            }}>
                <View>
                    <Image source={{uri: item?.imageUrl}} style={[styles.categoryImage, selectedCategory === item.name && styles.selectedCategory]} />
                </View>
                <Text style={{
                    textAlign:"center",
                    fontFamily:"outfit"
                }}>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    categoryImage:{
        width:80,
        height:80,
        borderRadius:20,
        borderWidth:2,
        borderColor:Colors.PRIMARY,
        margin:5,
        
    },
    selectedCategory:{
        borderColor:"#000",
        borderWidth:3,
    }
})


export default Category