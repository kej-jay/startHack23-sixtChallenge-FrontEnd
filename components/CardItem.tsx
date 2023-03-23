import React, { useState, useEffect } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  WHITE,
  ICON_GREEN,
  ICON_YELLOW,
  ICON_RED
} from "../assets/styles";
import { handleSwipes } from "../functionality/swiping";

const CardItem = ({
  item,
  hasVariant
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth - 80,
      height: 350,
      margin: 20,
    },
  ];

  const quoteStyle = [
    {
      borderRadius: 8,
      width: fullWidth - 80,
      height: 350,
      margin: 20,
      fontStyle: "italic", 
      fontSize: 40,
    }
  ];

  const nameStyle = [
    {
      paddingTop: 15,
      paddingBottom: 7,
      color: "#363636",
      fontSize: 30,
    },
  ];

  const typeStyle = [
    {
      paddingTop: 15,
      paddingBottom: 7,
      color: "#363636",
      fontSize: 15,
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.containerCardItem}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          }}>
        <View style={styles.modalView}>
            {!item.explanaition && (<Text style={nameStyle}>{item.name}</Text>)}
            {!item.explanaition && (<Text>{item.description}</Text>)}

            {item.explanaition && (<Text style={nameStyle}>Explanaition</Text>)}
            {item.explanaition && (<Text>{item.explanaition}</Text>)}

            <View style={styles.actionsCardItem}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Icon name="close" color={DISLIKE_ACTIONS} size={10} />
              </TouchableOpacity>
            </View>
        </View>
      </Modal>

      {/* TYPE */}
      <Text style={typeStyle}>{item.type}</Text>

      {item.type === "Stock" && (<Pressable onPress={() => setModalVisible(true)} style={{alignItems: "center"}}>

        {/* IMAGE */}
        <Image source={item.image} style={imageStyle}/>

        {/* MATCHES */}
        {item.match && (
          <View style={styles.matchesCardItem}>
            <Text style={styles.matchesTextCardItem}>
              <Icon name="heart" color={WHITE} size={13} /> {item.match}% Match!
            </Text>
          </View>
        )}

        {/* NAME */}
        <Text style={nameStyle}>{item.name}</Text>
      </Pressable>)}

      {item.type === "Quote" && (
        <Pressable onPress={() => setModalVisible(true)} style={{alignItems: "center"}}>

          {/* QUOTE */}
          <Text style={quoteStyle}>{item.quote}</Text>

          {/* NAME */}
          <Text style={nameStyle}>by {item.name}</Text>
        </Pressable>
      )}

      {item.type === "Info" && (
        <Pressable onPress={() => setModalVisible(true)} style={{alignItems: "center"}}>
          {/* NAME */}
          <Text style={{...nameStyle, fontSize: 20, fontStyle:"normal"}}>{item.name}</Text>

          {/* DESCRIPTION */}
          {item.description && (
            <Text style={quoteStyle}>{item.description}</Text>
          )}
        </Pressable>
      )}

      {item.type === "Up or Dahn" && (
        <Pressable onPress={() => setModalVisible(true)} style={{alignItems: "center"}}>

          {/* IMAGE */}
          <Image source={item.image} style={imageStyle}/>

          {/* NAME */}
          <Text style={nameStyle}>{item.name}</Text>
        </Pressable>
      )}
      
      {/* DESCRIPTION */}
      {item.description && item.type !== "Info" && (
        <Text style={styles.descriptionCardItem}>{item.description}</Text>
      )}

      {/* ACTIONS */}
      <View style={styles.actionsCardItem}>
        {item.type === "Stock" && (
          <>
            <TouchableOpacity style={{...styles.button, borderColor: ICON_RED}} onPress={() => console.log("far Left")}>
              <Icon name="analytics" color={DISLIKE_ACTIONS} size={30} />
              <Text style={{fontSize: 7}}>Trend</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button, borderColor: ICON_YELLOW}} onPress={() => console.log("mid Left")}>
              <Icon name="bandage-outline" color={DISLIKE_ACTIONS} size={30} />
              <Text style={{fontSize: 7}}>Risk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button, borderWidth:1}} onPress={() => console.log("mid Right")}>
              <Icon name="business-outline" color={DISLIKE_ACTIONS} size={30} />
              <Text style={{fontSize: 7}}>Industry</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button, borderColor: ICON_GREEN}} onPress={() => console.log("far Right")}>
              <Icon name="rocket-outline" color={DISLIKE_ACTIONS} size={30} />
              <Text style={{fontSize: 7}}>Popularity</Text>
            </TouchableOpacity>
          </>
        )}

        {item.type === "Quote" && (
          <>
            <TouchableOpacity style={styles.noButton} onPress={() => handleSwipes("left", item)}>
              <Icon name="close" color={DISLIKE_ACTIONS} size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.yesButton} onPress={() => handleSwipes("right", item)}>
              <Icon name="checkmark" color={DISLIKE_ACTIONS} size={30} />
            </TouchableOpacity>
          </>
        )}

        {item.type === "Info" && (
          <>
            <TouchableOpacity style={styles.noButton} onPress={() => handleSwipes("left", item)}>
              <Icon name="close" color={DISLIKE_ACTIONS} size={30} />
            </TouchableOpacity>
          </>
        )}

        {item.type === "Up or Dahn" && (
          <>
            <TouchableOpacity style={styles.noButton} onPress={() => handleSwipes("left", item)}>
              <Icon name="arrow-down" color={DISLIKE_ACTIONS} size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.yesButton} onPress={() => handleSwipes("right", item)}>
              <Icon name="arrow-up" color={DISLIKE_ACTIONS} size={30} />
            </TouchableOpacity>
          </>
        )}

      </View>
    </View>
  );
};

export default CardItem;
