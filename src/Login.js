import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }) => {

  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleLogin = async () => {
    try {
      let email = await AsyncStorage.getItem("Email");
      let password = await AsyncStorage.getItem("Password");

      await AsyncStorage.multiSet([['UserName', userName], ['UserPassword', userPassword]]);
      if(userName === email && userPassword === password){
        navigation.navigate('Profile');
      }
      else{
        alert("User Dont Exist");
      }
      // await AsyncStorage.setItem("UserName", userName);
      // await AsyncStorage.setItem("Password", password);
      // navigation.navigate('Profile');
    } catch (error) {
      alert(error);
    }
  }

  const getDetails = async () => {
    try {
      let name = await AsyncStorage.getItem("UserName");
      let pass = await AsyncStorage.getItem("UserPassword");

      if (name !== null) {
        setUserName(name);
      }

      if (pass !== null)
        setUserPassword(pass);

    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  // const handleLogin = () => {
  //   navigation.navigate('Profile');
  // }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.headerText} >User Login</Text>
      </View>

      <View>
        <Text>{userName}</Text>
        <Text>{userPassword}</Text>
      </View>

      <View style={styles.inputView} >

        <TextInput
          style={styles.inputText}
          placeholder="User Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>

        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserPassword(text)}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.loginText}>Don't have an account? Signup here</Text>
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
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 13
  },
  headerText: {
    //fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  forgot: {
    color: "white",
    fontSize: 11
  }
});

export default Login;



// import React from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

// const Login = ({ navigation}) => {
//   const handleLogin = () => {
//     navigation.navigate('Profile');
//   }

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >User Login</Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="User Name"
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

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>

//       <View >
//         <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
//           <Text style={styles.loginText}>LOGIN</Text>
//         </TouchableOpacity>
//       </View>

//       <View>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Don't have an account? Signup here</Text>
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
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//     fontSize: 13
//   },
//   headerText: {
//     //fontWeight: "bold",
//     fontSize: 50,
//     color: "#fb5b5a",
//     marginBottom: 40
//   },
//   forgot: {
//     color: "white",
//     fontSize: 11
//   }
// });

// export default Login;
