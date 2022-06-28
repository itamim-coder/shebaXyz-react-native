import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";

const Discount = () => {
  return (
    <SafeAreaView>
      <View style={styles.discount}>
        <Text
          style={{
            margin: 10,
            fontSize: 20,
          }}
        >
          BEST DEAL UPTO 51% DISCOUNT
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.offeerImg}
          source={require("../assets/discount-tag-with-special-offer-sale-sticker-M9GW7R.jpg")}
        />

        <Image
          style={styles.offeerImg}
          source={require("../assets/discount-tag-with-special-offer-sale-sticker-M9GW7R.jpg")}
        />

        <Image
          style={styles.offeerImg}
          source={require("../assets/discount-tag-with-special-offer-sale-sticker-M9GW7R.jpg")}
        />

        <Image
          style={styles.offeerImg}
          source={require("../assets/discount-tag-with-special-offer-sale-sticker-M9GW7R.jpg")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discount;

const styles = StyleSheet.create({
  discount: {
    marginTop: 30,
  },
  offeerImg: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 25,
    margin: 5,
  },
});
