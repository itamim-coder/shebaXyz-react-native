import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../assets/colors/colors";
import STYLES from "../assets/styles";
import {  useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const auth = getAuth();

  
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
        if (user) {
           navigation.navigate("TabNavigator")
        }
    })
},[])


  const handleSignUp =()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error => alert(error.message))
} 

  return (
    <SafeAreaView
    style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
  >
    <ScrollView showsVerticalScrollIndicator={false}>
     


    <View style={{ marginTop: 70 }}>
       <Text style={{fontSize: 35, fontWeight: 'bold', color: COLORS.black}}>
          Sign up to continue
        </Text>
      </View>

      <View style={{marginTop: 20}}>
      <View style={STYLES.inputContainer}>
        <Icon
          name="person-outline"
          color={COLORS.light}
          size={20}
          style={STYLES.inputIcon}
        />
        <TextInput
         onChangeText={text=>setName(text)} placeholder="Name" style={STYLES.input} />
      </View>
        <View style={STYLES.inputContainer}>
          <Icon
            name="mail-outline"
            color={COLORS.light}
            size={20}
            style={STYLES.inputIcon}
          />
          <TextInput
          onChangeText={text=>setEmail(text)}
          placeholder="Email" style={STYLES.input} />
        </View>
        <View style={STYLES.inputContainer}>
          <Icon
            name="lock-outline"
            color={COLORS.light}
            size={20}
            style={STYLES.inputIcon}
          />
          <TextInput
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            style={STYLES.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity 
         onPress={handleSignUp} 
         style={STYLES.btnPrimary}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        </View>
        <View>

           <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={STYLES.line}></View>
          <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
          <View style={STYLES.line}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
        
          <View style={{width: 10}}></View>
       
       
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginTop: 40,
          marginBottom: 20,
        }}>
        <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
          Don`t have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({})