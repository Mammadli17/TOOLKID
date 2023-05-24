import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { StateType } from '../redux';

const Header = () => {
  const { todos } = useSelector((state: StateType) => state.todosSlice)
 

    const currentDate = new Date();
    const options : any = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    return (
    <View >
          <View style={{marginTop:65,marginLeft:20 }}>
        <Text style={{fontSize:40,color:"black",fontWeight:"600"}}>{formattedDate} </Text>
        <Text style={{color:"gray",fontSize:20}}>{todos.length} uncompleted</Text>
        <View style={{backgroundColor:"gray",width:350,height:1,marginTop:20}}></View>
      </View>
    </View>
    );
  };
export default Header