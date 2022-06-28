import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Entypo } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.location}>
        <View>
          <Entypo name="location-pin" size={24} color="#C70039" />
        </View>
        <View>
          <Text style={{ color: "#C70039", fontSize: 15, fontWeight: "bold" }}>
            Mirpur
          </Text>
          <Text>Majar Road, Dhaka</Text>
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchWrapper}>
          <Icon name="search" size={20} style={styles.searchIcon} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  location: {
    marginTop: 35,
    marginLeft: 15,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: "center",
  },

  search: {
    marginHorizontal: 20,
    fontFamily: "Monserrat-regular",
    fontSize: 16,
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#f8fffa",
    borderRadius: 10,
    shadowColor: "#000",
    borderWidth: 0.3,
    // shadowOffset:{
    //   height: 3,
    //   width: 0,
    // },
    // shadowRadius: 4,
    // shadowOpacity: 3.5,
    // elevation: 10,
  },
  searchWrapper: {
    flexDirection: "row",
  },
  searchIcon: {
    color: "#b0b0b0",
    marginRight: 10,
    marginTop: 5,
  },
  searchInput: {
    color: "#b4b4b4",
    paddingRight: "80%",
  },
});
