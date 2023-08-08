import { View, Text,Platform , StyleSheet} from 'react-native'
import React from 'react'

const PlatformSpecific = () => {

  return (
    <View>
      <Text style={styles.txt}>PlatformSpecific {`${Platform.OS}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txt : {
      ...Platform.select({
        android : {
            color : 'red',
            fontSize : 20
        }
      })
    }
})
export default PlatformSpecific;