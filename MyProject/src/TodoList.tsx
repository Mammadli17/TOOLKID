import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { complet, getTodos, removed } from '../redux/slices/todoSlice'
import { AppDispatch, StateType, store } from '../redux'
import { Todo } from '../models/Todo'
const TodoList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, todos } = useSelector((state: StateType) => state.todosSlice)
    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const refresh = () => {
        dispatch(getTodos())
    }
    const Complett = (id:any) =>{
        dispatch(complet(id))


    }
    const remov = (id : any) =>{
        dispatch(removed(id))
    }
    return (
        loading == 'pending' ? <ActivityIndicator /> :
       
            <>
                <Text style={{fontSize:30,marginLeft:20}} >InCompleted</Text>
                
                <FlatList style={{marginLeft:20}}
                    
                    refreshing={false}
                    onRefresh={refresh}
                    data={todos}
                  
                    renderItem={({ item }: any) => (
                        <TouchableOpacity style={{backgroundColor:"red"}} onPress={()=>remov(item.id)}>
                            <View>
                            <TouchableOpacity onPress={()=>Complett(item.id)}>
                            < View style={{borderWidth:2,padding:15}}>
                             <Text style={{fontSize:15}}>{item.title}</Text>
                              </View>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    )}
                />
               
                {
                    error &&
                    <Text>{error}</Text>
                }
            </>

    )
}

export default TodoList

const styles = StyleSheet.create({})