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
import { query, onSnapshot, collection } from "firebase/firestore";
import { db } from "../App";
import { useNavigation } from "@react-navigation/native";

const Painting = () => {
  const navigation = useNavigation();
  const [painting, setPainting] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "painting"));

    const paintingListener = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setPainting(list);
    });
    return paintingListener;
  }, []);

  const renderItem = ({ item }) => {
    const { name, image } = item;
    return (
      <SafeAreaView>
        <View style={styles.paintBox}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("PaintingDetails", { item })}
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
        data={painting}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 50 }}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Painting;

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
