'use strict'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class GroupTabScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>Current Task: {this.props.allTasks.selectedTask && this.props.allTasks.selectedTask.name}</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} }) }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Back to Home'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => {
    return {
      allTasks: state.tasks
    }
  }
)(
  GroupTabScreenOne
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
});