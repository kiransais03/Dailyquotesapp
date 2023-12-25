import { Text, SafeAreaView, StyleSheet,View,Button } from 'react-native';
import React,{useEffect,useState} from "react";
import {AsyncStorage} from 'react-native';

import Quote from './components/Quote';
import Logo from "./components/Logo";

export default function App() {

//Intializing quotearr as empty state
  let [quotearr,setQuotearr] = useState([]);


  let [refreshbtn,setRefreshbtn]= useState(false);


  let [huehsl,setHuehsl] = useState(56)

//function to get hue(color) random value
  var gethuehsl = ()=>{
    let huehslval = Math.random()*360+1;
    setHuehsl(huehslval);
    console.log(huehslval,"value")
  }

//function to store date in Async stroage
  let storeDate = async (dt)=>{
  try {
    let dtstring = dt.toString();
    await AsyncStorage.setItem('date',dtstring);
  } catch (error) {
    console.log("Some error occurred during date storage")
  }
}

//functionm to get the quote from API and update the quotearr state
  let getquote = async ()=>{
    try {
    let response = await fetch('https://zenquotes.io/api/random');
    let data = await response.json();
    setQuotearr([...data]);
    gethuehsl();
    let dte = new Date();
    let nowdte = dte.getDate();
    storeDate(nowdte);
    console.log(data[0].q) 
    }
    catch(error) {
      console.log("Some error occurred",error);
    }
  }


//function to get old date that is stored in Async storage
let getoldDate = async ()=>{
  try {
    let date = await AsyncStorage.getItem('date');
    if(date)
    {
      return date;
    }
  } catch (error) {
    console.log("Some error occurred during date retrieval")
  }
}


//Hook to trigger teh functions at the start of app only to check the dates, if new date refresh the quote
  useEffect(()=>{ 
    async function checkdates () {
     let olddate = await getoldDate();
     if(olddate)
     {
       let d = new Date();
       let currdate = d.getDate();
       if(currdate!=olddate)
       {
         console.log("Currdate",currdate,"Old date",olddate) 
          getquote();
       }
     }
    }  
  },[])

//Hook to trigger new quote when the refresh button on the UI is manually pressed
  useEffect(()=>{
    getquote();
  },[refreshbtn])

  return (
    <SafeAreaView style={{flex:1,justifyContent:"flex-start", backgroundColor :`hsl(${huehsl},85.0%,70.0%)`}}>
     <Logo/>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        {quotearr.length>0 && <Quote quotearr={quotearr}/>} 
       </View>
        <Button style={styles.btn} title="Refresh Todays Quote" onPress={() => {setRefreshbtn({})}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  btn : {
    marginBottom:"40px",
  }
});
