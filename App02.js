import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";




export default function App02() {
  
  return (
    <View style={{
      flexDirection: 'column',
      height: 605,
      padding: 20,
      backgroundColor: "#23235B",
      width: 322,
      top: 19,
      left:19,
      borderRadius:15,
    }}>
      <View >
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
      </View>
      <View style={{width:50, height:40}}></View>
      <View style={{backgroundColor: "#151537", width:297, height:55}} />
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.title}>Password length</Text>
      <Text style={styles.Rectangle17}/>
      </View>
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.title}>Include lower case letters</Text>
      <Text style={styles.Rectangle18}/>
      </View>
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.title}>Include upcase letters</Text>
      <Text style={styles.Rectangle18}/>
      </View>
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.title}>Include number</Text>
      <Text style={styles.Rectangle18}/>
      </View>
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.title}>Include special symbol</Text>
      <Text style={styles.Rectangle18}/>
      </View>
      <View style={styles.line}></View>
      <View >
        <button style={styles.button}> GENERATE PASSWORD </button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
      height: 605,
      padding: 20,
      backgroundColor: "#23235B",
      width: 322,
      top: 19,
      left:19,
      borderRadius:15,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21.09,
    textAlign: "center",
    fontStyle: "Roboto",
    color: "#FFFFFF",
  },
  line: {
    width:50, 
    height:30
  },
  Rectangle17:{
    width: 118,
    height: 33,
    left: 21,
    backgroundColor: "#FFFFFF"
  },
  Rectangle18:{
    width: 25,
    height: 25,
    marginLeft: 30,
    backgroundColor: "#FFFFFF"
  },
  button : {
    fontSize: 18,
    color: 'white',
    backgroundColor:"#3B3B98",
    width: 280,
    height: 50,
  },

});
