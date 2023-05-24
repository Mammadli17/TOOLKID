import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../redux'
import { complet, getTodos } from '../redux/slices/todoSlice'

const Completed = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, todos } = useSelector((state: StateType) => state.tamam)
  
    return (
        loading == 'pending' ? <ActivityIndicator /> :
       
            <>
              <Text style={{fontSize:30,marginLeft:20}} >Completed</Text>
             <FlatList style={{marginLeft:20}}
                    
                   
                    data={todos}
                  
                    renderItem={({ item }: any) => (
                        <View>
                          
                            < View style={{borderWidth:2,padding:15}}>
                             <Text style={{fontSize:15}}>{item.title}</Text>
                              </View>
                         
                        </View>
                    )}
                />
              
             
                
               
               
                {
                    error &&
                    <Text>{error}</Text>
                }
            </>
  )
}

export default Completed