import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

import { UseCountContext, useCounterContext } from '/Users/Muthuraj/Desktop/Apps/counter/context/Count';
import { AntDesign } from '@expo/vector-icons';

export default function Bottom(){


    const CounterContext=useCounterContext();
    const c=CounterContext.count;
    return(
   <View style={styles.con}>
       <TouchableOpacity style={{padding:60}} onPress={()=>{
           CounterContext.setCount(c-1);
       }}><Text styles={{fontSize: 600,fontWeight: "bold"}}>Decrease</Text>
        </TouchableOpacity>
   </View>
    );
}


const styles=StyleSheet.create({
   
   con:{
       backgroundColor:'orange',
        width:400,
        marginTop:50,
        height:180
   },
   textstyles:{
    fontSize: 20,
    fontWeight: "bold"
   }
})