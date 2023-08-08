import { StyleSheet, Text, View, Modal,Button,StatusBar } from 'react-native'
import React,{useState} from 'react'

const ModalView = () => {
 const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text>This is Modal View</Text>
      <Button onPress={()=>setIsVisible(true)} title='Open Modal'/>
      <Modal visible={isVisible} animationType='slide'>
         <Text>Hello How are you i am fine</Text>
         <Button onPress={()=>setIsVisible(false)} title='Close Modal'/>
      </Modal>
    </View>
  )
}

export default ModalView

const styles = StyleSheet.create({
   container : {
        backgroundColor : "red",
        flex : 1,
        justifyContent : 'center'
   }
})