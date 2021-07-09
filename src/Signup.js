import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const Signup = ({ navigation }) => {

  //Setting states of data from user input
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUp = async () => {
    try {

      //Storing data in async memory
      await AsyncStorage.multiSet([['FirstName', firstName], ['LastName', lastName], ['PhoneNumber', phoneNumber], ['Email', email], ['Password', password],
      ['ConfirmPassword', confirmPassword]
      ]);

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      //Navigating to login page after signing up
      navigation.navigate('Login');
    }
    catch (error) {
      alert(error);
    }
  }

  return (

    //Sign up page
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >Sign Up</Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          maxLength={50}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => {
            setFirstName(text)
          }}
          value={firstName}
        />

      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          maxLength={50}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          maxLength={10}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          // onChangeText={(text) => setPhoneNumber(text)}
          onChangeText={(text) => {
            if (isNaN(text)) {
              alert("Not a number")
            }
            else {
              setPhoneNumber(text);
            }
          }}
          value={phoneNumber}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={email}

        // onChangeText={(text) => {
        //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        //   if (reg.test(text) === false) {

        //     setEmail(text);
        //     alert("Invalid Email");
        //     return false;
        //   }
        //   else {
        //     setEmail(text);
        //   }
        // }}

        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          secureTextEntry
          maxLength={8}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          secureTextEntry
          maxLength={8}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          // onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          // onChangeText={(text) => {
            
          //   if(confirmPassword !== password){
          //     alert("Passwords do not match!")
          //     setConfirmPassword(confirmPassword);
          //   }
          //   else{
          //     setConfirmPassword(confirmPassword);
          //   }
          // }}
        />
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Login here</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

//Styling for sign up page
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
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 11
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#fb5b5a",
    marginBottom: 20
  }
});

export default Signup;
