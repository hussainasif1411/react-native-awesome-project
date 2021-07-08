//************************************************************************SIGNUP PAGE********************************************************** */

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';


// const Signup = ({ navigation }) => {

//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

//   const handleSignUp = async() => {
//     try {
//       await AsyncStorage.multiSet([['FirstName', firstName], ['LastName', lastName], ['PhoneNumber', phoneNumber], ['Email', email], ['Password', password],
//       ['ConfirmPassword', confirmPassword]
//       ]);
//       navigation.navigate('Login');
//     } 
//     catch (error) {
//       alert(error);
//     }
//     //navigation.navigate('Login');
//   }

//   const getDetails = async () => {
//     try {
//       let fName = await AsyncStorage.getItem("FirstName");
//       let lName = await AsyncStorage.getItem("LastName");
//       let pNumber = await AsyncStorage.getItem("PhoneNumber");
//       let email = await AsyncStorage.getItem("Email");
//       let password = await AsyncStorage.getItem("Password");
//       let cPassword = await AsyncStorage.getItem("ConfrimPassword");


//       if (fName !== null) {
//         setFirstName(fName);
//       }

//       if (lName !== null) {
//         setLastName(lName);
//       }


//       if (pNumber !== null) {
//         setPhoneNumber(pNumber);
//       }


//       if (email !== null) {
//         setEmail(email);
//       }


//       if (password !== null) {
//         setPassword(password);
//       }


//       if (cPassword !== null) {
//         setConfirmPassword(cPassword);
//       }


//     } catch (error) {
//       alert(error);
//     }
//   }

//   useEffect(() => {
//     getDetails();
//   }, []);

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >Sign Up</Text>
//       </View>

//       <View>
//         <Text>
//           {firstName}
//           {lastName}
//         </Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="First Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setFirstName(text)}
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Last Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setLastName(text)}
//         />
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="Phone Number"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setPhoneNumber(text)}
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setEmail(text)}
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>

//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Confirm Password"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setConfirmPassword(text)}
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



//**********************************************************************LOGIN PAGE********************************************************* */

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// const Login = ({ navigation }) => {

//   const [userName, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleLogin = async () => {
//     try {
//       await AsyncStorage.multiSet([['UserName', userName], ['Password', password]]);
//       // await AsyncStorage.setItem("UserName", userName);
//       // await AsyncStorage.setItem("Password", password);
//       //navigation.navigate('Profile');
//     } catch (error) {
//       alert(error);
//     }
//   }

//   const getDetails = async () => {
//     try {
//       let name = await AsyncStorage.getItem("UserName");
//       let pass = await AsyncStorage.getItem("Password");

//       if (name !== null) {
//         setUserName(name);
//       }

//       if (pass !== null)
//         setPassword(pass);

//     } catch (error) {
//       alert(error);
//     }
//   }

//   useEffect(() => {
//     getDetails();
//   }, []);

//   // const handleLogin = () => {
//   //   navigation.navigate('Profile');
//   // }

//   return (
//     <View style={styles.container}>

//       <View>
//         <Text style={styles.headerText} >User Login</Text>
//       </View>

//       <View>
//         <Text>{userName}</Text>
//         <Text>{password}</Text>
//       </View>

//       <View style={styles.inputView} >

//         <TextInput
//           style={styles.inputText}
//           placeholder="User Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setUserName(text)}
//         />
//       </View>
//       <View style={styles.inputView}>

//         <TextInput
//           style={styles.inputText}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setPassword(text)}
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




// **********************************WORKING ROUTES*****************************************/

import React from 'react';
import AppRoute from './routes/AppRoutes';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  return(
    <AppRoute />
  )
}
export default App;


//***********************************WORKING ROUTE SAME FOLDER******************************/

// import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// //import {AppRoute} from './routes/AppRoutes';

// import Login from './src/Login';
// import Signup from './src/Signup';
// import Profile from './src/Profile';

// const App = () => {

//   const Navigator = createStackNavigator(
//     {
//         Signup: Signup,
//         Login: Login,
//         Profile: Profile
//     },
//     {
//         initialRouteName: 'Signup',
//     }
//   );

//   const AppRoute = createAppContainer(Navigator);

//   return(
//     <AppRoute />
//   )
// }
// export default App;

//***************************************HELLO WORLD******************************************/

// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return(
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   )
// }
// export default App;

//******************************************TEXT INPUT STATE***************************************/

// import React, { useState } from 'react';
// import { View, TextInput, Image, TouchableOpacity } from 'react-native';
// import { event } from 'react-native-reanimated';

// const App = () => {

//   const [input, setInputText] = useState("Asif");
//   const [editableState, setEditableState] = useState(false);

//   const handleEditableState = () => {
//     setEditableState(true);
//   }

//   const handleInputText = () => {
//     setInputText(event.target.value);
//   }

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TextInput
//         style={{ borderWidth: 1, width: 100, height: 40, color: 'black' }}
//         value={input}
//         editable={editableState}
//         onChangeText={handleInputText}
//       />
//       <TouchableOpacity onPress={handleEditableState}>
//         <Image style={{
//           marginRight: 40,
//           marginLeft: 10,
//           marginTop: 5,
//           width: 40,
//           height: 50,
//         }} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
//       </TouchableOpacity>
//     </View>
//   )
// }
// export default App;


//*******************************ROUTING EXAMPLE********************************************/

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


// import React from 'react';
// import {View, Text} from 'react-native';
// //import AppRoutes from './routes/AppRoutes';
// import { createStackNavigator} from 'react-navigation-stack';
// //import { NavigationContainer } from 'react-navigation';
// import { createAppContainer } from 'react-navigation';

// // const App = () => {
// //   return(
// //     <View>
// //       <AppRoutes />
// //       <Text>Hello World!</Text>
// //     </View>
// //   )
// // }


// function HomeScreen(){
//   return(
//     <Text>Home Screen</Text>import React from 'react';
// import {View, Text} from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// //import {AppRoute} from './routes/AppRoutes';

// import Login from './src/Login';
// import Signup from './src/Signup';
// import Profile from './src/Profile';

// const App = () => {

//   const Navigator = createStackNavigator(
//     {
//         Signup: Signup,
//         Login: Login,
//         Profile: Profile
//     },
//     {
//         initialRouteName: 'Signup',
//     }
//   );

//   const AppRoute = createAppContainer(Navigator);

//   return(
//     <AppRoute />
//   )
// }
// export default App;
// }

// const Stack = createStackNavigator();

// export default function App(){
//   return(
//         <createAppContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//           </Stack.Navigator>

//         </createAppContainer>
//   )
// }