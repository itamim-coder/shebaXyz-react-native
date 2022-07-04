import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const CleaningDetails = ({ route }) => {
  const item = route.params.item;
  return (
    <SafeAreaView>
      <View style={styles.detailsBox}>
        <Image style={styles.image} source={{ uri: item.image }}></Image>
        <Text style={styles.title}>Starting From</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        <Text style={styles.description}>{item.details}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CleaningDetails;

const styles = StyleSheet.create({
  detailsBox: {
    marginTop: 50,
  },

  image: {
    height: 200,
    width: 350,
    marginLeft: 20,
    borderRadius: 15,
  },
  title: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
  price: {
    marginLeft: 20,
    fontSize: 25,
    color: "#C70039",
  },
  description: {
    margin: 20,
  },
});
