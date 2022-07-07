import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";


import { useNavigation } from "@react-navigation/native";

const Trending = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Trending</Text>
        <TouchableOpacity>
          <Text style={{ color: "#C70039", fontSize: 15, fontWeight: "bold" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trending}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CategoryFilter", "painting");
          }}
        >
          <Image
            style={styles.trendingImg}
            source={require("../assets/1612862065_paintingservices_270x180.webp")}
          ></Image>
          <Text style={styles.trendingTxt}>Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CategoryFilter", "cleaning");
          }}
        >
          <Image
            style={styles.trendingImg}
            source={require("../assets/1617855940_homecleaning_270x180.webp")}
          ></Image>
          <Text style={styles.trendingTxt}>Home Cleaning</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trending}>
        <TouchableOpacity onPress={() => navigation.navigate("Pest")}>
          <Image
            style={styles.trendingImg}
            source={require("../assets/1617856509_pestcontrolservice_270x180.webp")}
          ></Image>
          <Text style={styles.trendingTxt}>Pest Control</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Plumbing")}>
          <Image
            style={styles.trendingImg}
            source={require("../assets/1619428672_plumbingsanitaryservices_270x180.webp")}
          ></Image>
          <Text style={styles.trendingTxt}>Plumbing</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Trending;

const styles = StyleSheet.create({
  trending: {
    flexDirection: "row",
  },
  trendingImg: {
    height: 100,
    width: 150,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
  },
  trendingTxt: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
