import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = () => {

  const [phoneNumber, setPhoneNumber] = useState("9584801219");
  const [editableState, setEditableState] = useState(false);

  // async () => {
  //   let userPhone = await AsyncStorage.getItem("PhoneNumber");
  // }

  const getDetails = async () => {
    try {
      let fName = await AsyncStorage.getItem("FirstName");
      let lName = await AsyncStorage.getItem("LastName");
      let pNumber = await AsyncStorage.getItem("PhoneNumber");
      let email = await AsyncStorage.getItem("Email");
      let password = await AsyncStorage.getItem("Password");
      let cPassword = await AsyncStorage.getItem("ConfrimPassword");

      setPhoneNumber(pNumber);
    } 
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);


  const handleEditableSate = () => {
    setEditableState(true);
  }

  const handlePhoneNumber = (val) => {
    setPhoneNumber(val);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userProfileText}>User Profile</Text>
      </View>

      <View>
        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <Image style={styles.imageUpload} source={require('../assets/image-ipload.jpg')} />
      </View>

      <View style={styles.bodyContent}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.userData}>Asif Hussain</Text>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.userData}>Pathan</Text>
        <Text style={styles.label}>Phone Number</Text>

        <View style={styles.phoneNumberView}>
          <TextInput style={styles.inputText} value={phoneNumber} editable={editableState} onChangeText={handlePhoneNumber}></TextInput>
          <TouchableOpacity onPress={handleEditableSate}>
            <Image style={styles.phonebookIcon} source={require('../assets/phoneBook.jpg')}  />
          </TouchableOpacity>
        </View>


        {/* <Text style={styles.userData}>9584801219</Text> */}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    header: {
      backgroundColor: "#00BFFF",
      height: 200,
    },
    userProfileText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 40,
      marginLeft: 83,
      marginTop: 20
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      //borderWidth: 4,
      //borderColor: "white",
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: -70
    },
    bodyContent: {
      marginTop: 80,
      marginLeft: 70
      //justifyContent: 'center',
      //alignItems: 'center'
      //position: 'absolute',
    },
    userData: {
      fontSize: 18,
      color: "black",
      fontWeight: '600',
    },
    label: {
      color: '#C0C0C0',
      marginTop: 10
    },
    phoneNumberView: {
      flexDirection: "row",
      //justifyContent: "space-between"
    },
    inputText: {
      borderWidth: 1,
      height: 40,
      width: '80%',
      marginTop: 5,
      color: 'black'
    },
    phonebookIcon: {
      marginRight: 40,
      marginLeft: 10,
      //marginTop: 5,
      width: 40,
      height: 50,
      opacity: 0.7
    },
    buttonContainer: {
      marginTop: 30,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF",
    },
    buttonText: {
      color: '#FFFFFF'
    },
    imageUpload: {
      width: 30,
      height: 29,
      borderRadius: 100,
      marginLeft: 203,
      marginTop: 30
    },

  }
)

export default Profile;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

// const Profile = () => {

//   const [phoneNumber, setPhoneNumber] = useState("9584801219");
//   const [editableState, setEditableState] = useState(false);

//   const handleEditableSate = () => {
//     setEditableState(true);
//   }

//   const handlePhoneNumber = (val) => {
//     setPhoneNumber(val);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.userProfileText}>User Profile</Text>
//       </View>

//       <View>
//         <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
//         <Image style={styles.imageUpload} source={require('../assets/image-ipload.jpg')} />
//       </View>

//       <View style={styles.bodyContent}>
//         <Text style={styles.label}>First Name</Text>
//         <Text style={styles.userData}>Asif Hussain</Text>
//         <Text style={styles.label}>Last Name</Text>
//         <Text style={styles.userData}>Pathan</Text>
//         <Text style={styles.label}>Phone Number</Text>

//         <View style={styles.phoneNumberView}>
//           <TextInput style={styles.inputText} value={phoneNumber} editable={editableState} onChangeText={handlePhoneNumber}></TextInput>
//           <TouchableOpacity onPress={handleEditableSate}>
//             <Image style={styles.phonebookIcon} source={require('../assets/phoneBook.jpg')}  />
//           </TouchableOpacity>
//         </View>


//         {/* <Text style={styles.userData}>9584801219</Text> */}
//         <TouchableOpacity style={styles.buttonContainer}>
//           <Text style={styles.buttonText}>Update Profile</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// const styles = StyleSheet.create(
//   {
//     container: {
//       flex: 1
//     },
//     header: {
//       backgroundColor: "#00BFFF",
//       height: 200,
//     },
//     userProfileText: {
//       color: '#FFFFFF',
//       fontWeight: 'bold',
//       fontSize: 40,
//       marginLeft: 83,
//       marginTop: 20
//     },
//     avatar: {
//       width: 130,
//       height: 130,
//       borderRadius: 63,
//       //borderWidth: 4,
//       //borderColor: "white",
//       marginBottom: 10,
//       alignSelf: 'center',
//       position: 'absolute',
//       marginTop: -70
//     },
//     bodyContent: {
//       marginTop: 80,
//       marginLeft: 70
//       //justifyContent: 'center',
//       //alignItems: 'center'
//       //position: 'absolute',
//     },
//     userData: {
//       fontSize: 18,
//       color: "black",
//       fontWeight: '600',
//     },
//     label: {
//       color: '#C0C0C0',
//       marginTop: 10
//     },
//     phoneNumberView: {
//       flexDirection: "row",
//       //justifyContent: "space-between"
//     },
//     inputText: {
//       borderWidth: 1,
//       height: 40,
//       width: '80%',
//       marginTop: 5,
//       color: 'black'
//     },
//     phonebookIcon: {
//       marginRight: 40,
//       marginLeft: 10,
//       //marginTop: 5,
//       width: 40,
//       height: 50,
//       opacity: 0.7
//     },
//     buttonContainer: {
//       marginTop: 30,
//       height: 45,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 20,
//       width: 250,
//       borderRadius: 30,
//       backgroundColor: "#00BFFF",
//     },
//     buttonText: {
//       color: '#FFFFFF'
//     },
//     imageUpload: {
//       width: 30,
//       height: 29,
//       borderRadius: 100,
//       marginLeft: 203,
//       marginTop: 30
//     },

//   }
// )

// export default Profile;