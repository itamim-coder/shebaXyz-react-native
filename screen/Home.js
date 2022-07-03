import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../components/banner'
import Catagory from '../components/Catagory'
import Discount from '../components/Discount'
import Trending from '../components/Trending'
import TopBar from '../components/TopBar'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <TopBar></TopBar>
    </View>
    <ScrollView>
      <View style={styles.banner}>
        <Banner></Banner>
      </View>
      <View style={styles.catagory}>
        <Catagory></Catagory>
      </View>
      <View>
        <Discount></Discount>
      </View>
      <View>
        <Trending></Trending>
      </View>
      <View style={styles.banner}>
        <Banner></Banner>
      </View>
      <View>
        <Image
          style={{
            width: 350,
            height: 100,
            marginLeft: 20,
            marginBottom: 20,
            justifyContent: "center",
          }}
          source={require("../assets/286033848_3236833093305034_8208002980877506417_n.jpg")}
        ></Image>
        <Image
          style={{
            width: 350,
            height: 100,
            marginLeft: 20,
            marginBottom: 20,
            justifyContent: "center",
          }}
          source={require("../assets/286033848_3236833093305034_8208002980877506417_n.jpg")}
        ></Image>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },    
      catagory: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
      },
})