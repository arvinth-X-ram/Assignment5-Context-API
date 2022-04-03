import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

import { UseCountContext, useCounterContext } from '/Users/Muthuraj/Desktop/Apps/counter/context/Count';
import { AntDesign } from '@expo/vector-icons';

export default function MainScreen(){
  
    const CounterContext=useCounterContext();
    return(
    
        <View style={{backgroundColor:'orange',marginTop:20,height:350}}>
            <Text style={{margin:50,fontSize:130,marginTop:50}}>{CounterContext.count}</Text>
            
         </View>
    );
        
    }