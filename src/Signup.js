import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const Signup = ({ navigation }) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUp = async() => {
    try {
      await AsyncStorage.multiSet([['FirstName', firstName], ['LastName', lastName], ['PhoneNumber', phoneNumber], ['Email', email], ['Password', password],
      ['ConfirmPassword', confirmPassword]
      ]);
      navigation.navigate('Login');
    } 
    catch (error) {
      alert(error);
    }
    //navigation.navigate('Login');
  }

  const getDetails = async () => {
    try {
      let fName = await AsyncStorage.getItem("FirstName");
      let lName = await AsyncStorage.getItem("LastName");
      let pNumber = await AsyncStorage.getItem("PhoneNumber");
      let email = await AsyncStorage.getItem("Email");
      let password = await AsyncStorage.getItem("Password");
      let cPassword = await AsyncStorage.getItem("ConfrimPassword");


      if (fName !== null) {
        setFirstName(fName);
      }

      if (lName !== null) {
        setLastName(lName);
      }


      if (pNumber !== null) {
        setPhoneNumber(pNumber);
      }


      if (email !== null) {
        setEmail(email);
      }


      if (password !== null) {
        setPassword(password);
      }


      if (cPassword !== null) {
        setConfirmPassword(cPassword);
      }


    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >Sign Up</Text>
      </View>

      <View>
        <Text>
          {firstName}
          {lastName}
        </Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? Login here</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

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
    //fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 20
  }
});

export default Signup;





// import React from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

// const Signup = ({ navigation }) => {

//   const handleSignUp = () => {
//     navigation.navigate('Login');
//   }

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >Sign Up</Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="First Name"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Last Name"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Phone Number"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Confirm Password"
//           placeholderTextColor="#003f5c"
//         // onChangeText={text => this.setState({ email: text })} 
//         />
//       </View>

//       <View >
//         <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
//           <Text style={styles.loginText}>SIGN UP</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Already have an account? Login here</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#465881",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20
//   },
//   inputText: {
//     height: 50,
//     color: "white"
//   },
//   loginBtn: {
//     width: 280,
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//     fontSize: 11
//   },
//   headerText: {
//     //fontWeight: "bold",
//     fontSize: 50,
//     color: "#fb5b5a",
//     marginBottom: 20
//   }
// });

// export default Signup;