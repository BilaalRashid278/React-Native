import React from 'react'
import { View,Text,Button,StyleSheet,Platform } from 'react-native'

class ClassBasedComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        Num : 0,
        MyName : "Bilaal"
    }
  }
  ChangeName(){
    console.log("Hello Change");
    this.setState({
      MyName : "Abdullah"
    })
  }
  render() {
    return (
      <View>
        <Text style={styles.con}>{this.state.Num}{this.state.MyName}</Text>
        <Button onPress={()=>{this.setState({Num : 10})}} title='Change'/>
        <Button onPress={this.ChangeName} title='Button 2' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    con : {
        color : Platform.OS == 'ios' ? 'red' : "blue",
        paddingLeft : 10,
        fontSize : 20
    }
})

export default ClassBasedComponent;