import {Text,View,StyleSheet,Image} from "react-native";

export default function Logo () {

//Component for Logo image
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/Dqlogo.jpeg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
  borderRadius : "5rem", 
  // marginLeft:5,
  width:"90%",
  height:110,
  },
})