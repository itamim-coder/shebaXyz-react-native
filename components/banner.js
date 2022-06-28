import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

const images = [
  "https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp",
  "https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/286033848_3236833093305034_8208002980877506417_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF9uid9gPPeK_hyCCgNuvatjM7JemnWFhaMzsl6adYWFhECn28ljdjiPRbVfUlTVP2OmYJkL3KCw6Fp6Zh4zHkG&_nc_ohc=tWSzUQYXo84AX8LCfNI&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-j2nuqsSShmtoPRYjynfID8PDlX9hcN_psKLaWfF_wCA&oe=62C0C33D",
  "https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Banner = () => {
  const [imgActive, setImgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          autoplay
          circleLoop
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={index}
              resizeMode="cover"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapDot}>
        {images.map((e, index) => (
          <Text
            key={index}
            style={imgActive == index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "gray",
  },
});
