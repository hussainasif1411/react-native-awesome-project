import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }) => {

  //Setting states for username and password
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = async () => {
    try {

      //Getting user's sign up data for matching with login data
      let email = await AsyncStorage.getItem("Email");
      let password = await AsyncStorage.getItem("Password");
      
      //Storing data in async storage
      await AsyncStorage.multiSet([['UserName', userName], ['UserPassword', userPassword]]);
      
      //Matching email and password from async storage
      if(userName === email && userPassword === password){
        
         setUserName("");
         setUserPassword("");

        //Navigating to profile page
        navigation.navigate('Profile');
      }
      else{
        alert("User Dont Exist");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (

    //Login page
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >User Login</Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="User Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserName(text)}
          value={userName}
        />
      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          secureTextEntry
          maxLength={8}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserPassword(text)}
          value={userPassword}
        />
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.loginText}>Don't have an account? Signup here</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


//Styling for login page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  loginBtn: {
    width: 280,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 13
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#fb5b5a",
    marginBottom: 40
  },
  forgot: {
    color: "white",
    fontSize: 11
  }
});

export default Login;
