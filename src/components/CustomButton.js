import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { colors } from '../global/styles'

const CustomButton = ({ title, onClick }) => {
    return (
        <TouchableOpacity 
            style={styles.btn} 
            onPress={() => {
                onClick();
            }}>
            <Text style={{ color: 'white' }}>{title}</Text>
        </TouchableOpacity>

    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width - 50,
        height: 50,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 10,
    },
})