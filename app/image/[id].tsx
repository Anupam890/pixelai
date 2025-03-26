import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { useLocalSearchParams } from 'expo-router'

const Image = () => {
    const { id } = useLocalSearchParams()
   useEffect(()=>{
    console.log(id)
   },[])
  return (
    <View>
      <Text>Image</Text>
    </View>
  )
}

export default Image