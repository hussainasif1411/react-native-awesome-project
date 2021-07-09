import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({ navigation }) => {
  //Setting states
  const [firstName, setPFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editableState, setEditableState] = useState(false);

  const getDetails = async () => {
    try {

      //Getting user data from aynsc storage
      let fName = await AsyncStorage.getItem("FirstName");
      let lName = await AsyncStorage.getItem("LastName");
      let pNumber = await AsyncStorage.getItem("PhoneNumber");

      setPFirstName(fName);
      setLastName(lName);
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
    //Setting number number of user to be editable
    setEditableState(true);
  }

  const handleLogOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (

    //Profile page
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
        <View style={styles.phoneNumberView}>
          <TextInput style={styles.inputText} value={firstName}></TextInput>
        </View>

        <Text style={styles.label}>Last Name</Text>
        <View style={styles.phoneNumberView}>
          <TextInput style={styles.inputText} value={lastName}></TextInput>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneNumberView}>
          <TextInput style={styles.inputText} value={phoneNumber} editable={editableState} onChangeText={(val) => setPhoneNumber(val)}></TextInput>
          <TouchableOpacity onPress={handleEditableSate}>
            <Image style={styles.phonebookIcon} source={require('../assets/phoneBook.jpg')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutContainer} onPress={handleLogOut}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>

      </View>



    </View>
  )
}

//Styling for profile page
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
      marginTop: 55,
      marginLeft: 70
      //justifyContent: 'center',
      //alignItems: 'center'
      //position: 'absolute',
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
      marginTop: 20,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#00BFFF",
    },
    logoutContainer: {
      marginTop: 5,
      height: 35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      width: 80,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      //borderRadius: 30,
      backgroundColor: "#C5C5C5",
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