import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { query, onSnapshot, collection, where } from "firebase/firestore";
import { db } from "../App";
import { useNavigation } from "@react-navigation/native";
import { category } from "../components/Trending";

const CategoryFilter = (props) => {
  const category = props.route.params;
  const [filterData, setFilterData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(category);
    const q = query(
      collection(db, "services"),
      where("category", "==", category)
    );
    const filterListener = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setFilterData(list);
    });
    return filterListener;
  }, [category]);

  console.log(filterData);

  const renderItem = ({ item }) => {
    const { name, image } = item;
    return (
      <SafeAreaView>
        <View style={styles.paintBox}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Image style={styles.trendingImg} source={{ uri: image }}></Image>
            <Text style={styles.trendingTxt}>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.nav}>Details</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 50 }}
      ></FlatList>
    </SafeAreaView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  paintBox: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
  },
  box: {
    flexDirection: "row",
  },

  trendingImg: {
    height: 100,
    width: 70,
    borderRadius: 20,
  },
  trendingTxt: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  nav: {
    marginTop: 20,
    color: "#C70039",
    borderRadius: 5,
  },
});
