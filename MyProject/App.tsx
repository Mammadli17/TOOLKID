import { View, Text } from 'react-native'
import React from 'react'
import Header from './src/Header'
import { store } from './redux'
import { Provider } from 'react-redux'
import TodoList from './src/TodoList'
import CreateTodo from './src/CreateTodo'
import Completed from './src/Completed'






const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
      <Header/>
   <View style={{flex:0.8}}>
   <TodoList/>
   </View>
       <CreateTodo/>
       <Completed/>

      </View>
    
    
    </Provider>

  )
}

export default App