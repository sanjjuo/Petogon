import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dataBase } from '../../Config/FirebaseConfig'
import PetListItems from './PetListItems'

const PetList = () => {

  const [petList, setPetList] = useState([])
  const [loader, setLoader] = useState(false)

  /**
   * use to get petlist on category selection
   * @param {*} category 
   */

  const getPetList = async (category) => {
    setLoader(true)
    setPetList([])
    const q = query(collection(dataBase, "Pets"), where("category", "==", category))
    const queryResponse = await getDocs(q)

    queryResponse.forEach(doc => {
      console.log(doc.data());
      setPetList(petList => [...petList, doc.data()])
    })

    setLoader(false)
  }

  useEffect(() => {
    getPetList('Dogs')
  }, [])

  return (
    <View>
      <Category category={(value) => getPetList(value)} />
      <FlatList
        style={{ marginTop: 40 }}
        numColumns={2}
        refreshing={loader}
        onRefresh={() => getPetList('Dogs')}
        data={petList}
        renderItem={({ item, index }) => (
          <PetListItems pet={item} />
        )}
      />
    </View>
  )
}

export default PetList