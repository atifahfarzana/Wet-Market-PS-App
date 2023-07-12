import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'

const AdminItemScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>AdminItemScreen</Text>

      <CustomTextInput/>
      <CustomButton title={'Add Item'} onClick={() => {}}/>
    </View>
  )
}

export default AdminItemScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})