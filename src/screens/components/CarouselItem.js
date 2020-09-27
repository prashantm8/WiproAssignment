import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native'
import { IMAGE_URL } from '../../utils/Constants'
import { setValueBasedOnHeight, WIDTH } from '../../utils/deviceDimensions'

const CarouselItem = ({ item }) => {
    const [imageLoading , setImageLoading] = useState(false)
    return (
        <View style={[styles.cardView,imageLoading?{backgroundColor:'#808080'}:{backgroundColor:'transparent'}]}>
            {imageLoading && <ActivityIndicator size='large' color="blue"/>}
            <Image style={styles.image}
                source={{ uri: IMAGE_URL + item.id }} 
                onLoadStart ={()=>{
                    setImageLoading(true)
                }}

                onLoadEnd ={()=>{
                    setImageLoading(false)
                }}
            />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.author}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: WIDTH - 20,
        height: setValueBasedOnHeight(400),
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: WIDTH - 20,
        height: setValueBasedOnHeight(400),
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem