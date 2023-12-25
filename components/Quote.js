import { Text, View, StyleSheet, Image,Button } from 'react-native';

export default function Quote({quotearr}) {

//Component for displaying Quote and author
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>Quote Of The Day:</Text>
     <Text style={styles.quote}>{quotearr[0].q}</Text>  
     <Text style={styles.author}>~{quotearr[0].a}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  heading : {
   fontSize :20,
   paddingBottom:20,
   textDecorationLine:"underline"
  },
  quote : {
    fontSize :35,
  },
  author:{
    fontSize :30,
    fontStyle:"italic",
    textAlign:"right"
  }
});
