import React, { useState } from "react";
import { View, ImageBackground, Text, Modal, TouchableOpacity } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import { handleSwipes } from "../functionality/swiping";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (                
            <Card key={item.id}
            onSwipedLeft={() => handleSwipes("left", item)}
            onSwipedRight={() => handleSwipes("right", item)}
            >
              <CardItem
                item={item}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
