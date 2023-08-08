import { StyleSheet, Text, View,SafeAreaView,ScrollView,TextInput,KeyboardAvoidingView,Platform } from 'react-native'
import React,{useState} from 'react'
import KeyboardManager from 'react-native-keyboard-manager';
const LayoutComponent = () => {
  const [txt,setTxt] = useState('');
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <KeyboardAvoidingView behavior='position'>
          <TextInput
            style={styles.inputBox}
            placeholder='Type Here...'
            value={txt}
            onChange={(value)=>{
                setTxt(value);
            }}
            focusable
          />
          <TextInput
            style={styles.inputBox}
            placeholder='Type Here...'
            value={txt}
            onChange={(value)=>{
                setTxt(value);
            }}
            focusable
          />
          <View style={styles.btn}>
            <Text style={styles.BtnText}>Button</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

export default LayoutComponent

const styles = StyleSheet.create({
  container : {
    backgroundColor : "aqua",
    flexGrow : 1,
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 10
  },
  inputBox : {
    borderWidth : 1,
    width : 300,
    borderRadius : 12,
    backgroundColor : "white",
    paddingHorizontal : 12,
    fontSize : 20,
    fontWeight : '500',
    marginVertical : 15
  },
  btn : {
     paddingHorizontal : 25,
     backgroundColor : "red",
     maxWidth : 110,
     paddingVertical : 7,
     borderRadius : 3,
     alignSelf : 'center'
  },
  BtnText : {
    fontSize : 20,
    color : 'white'
  }
})