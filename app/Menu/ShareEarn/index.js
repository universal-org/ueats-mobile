import * as React from 'react';
import { View, StyleSheet, Text,TouchableOpacity, } from "react-native";
import Lottie from 'lottie-react-native';
import { Button, List, useTheme } from 'react-native-paper';
export default function Library() {
    return (
       
        <
    
        >

        <Lottie style={styles.cartinit} source={require('../../../assets/ShareEarn.json')} autoPlay loop />
        <Lottie style={styles.rs} source={require('../../../assets/rs.json')} autoPlay loop />
        <Text  style={styles.text}>Get 10₹ for your Every  {'\n'} Link Share.</Text> 
             <View   style={styles.button}>
         <Button
         mode="contained-tonal"
         onPress={() => {}}
       
       >
       
Share Now
       </Button>
       </View>
        </>
      
    );
}
const styles = StyleSheet.create({
    button: {
 
      alignItems:'center',

      position: "absolute",
      width: "100%",
      bottom: 10,
      // borderColor: 'white',
      // borderWidth: 1,
      // borderStyle: 'solid' ,
    },
    text: {
 
      alignItems:'center',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 25 ,
       Color:'black',
      position: "absolute",
      width: "100%",
      bottom: 60,
      // borderColor: 'white',
      // borderWidth: 1,
      // borderStyle: 'solid' ,
    },
    cartinit: {
 
        // alignItems:'center',
        // position: "absolute",
        width: "100%",
        // bottom: 40,
    //  marginLeft:10,
        
        // borderColor: 'white',
        // borderWidth: 1,
        // borderStyle: 'solid' ,
      },
      rs: {
 
        // alignItems:'center',
        // position: "absolute",
        // width: "100%",
        zIndex:100,
        // bottom: 40,
    //  marginLeft:10,
        
        // borderColor: 'white',
        // borderWidth: 1,
        // borderStyle: 'solid' ,
      },
});