import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentSection from "./PaymentSection";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AddCardSection = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.selectThePaymentMethodYouParent, styles.parentPosition]}
    >
      <Text style={styles.selectThePayment}>
        Select the payment method you want to use
      </Text>
      <View style={styles.groupParent}>
        <Pressable
          style={styles.rectangleLayout}
          onPress={() => navigation.navigate("YourAddressLocation3")}
        >
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              />
              <Text style={[styles.addCard, styles.addCardTypo]}>Add Card</Text>
            </View>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-238575.png")}
            />
          </View>
        </Pressable>
        <PaymentSection
          iconCode={require("../assets/frame2.png")}
          paymentMethodIconCode="Apple Pay"
          productCode={require("../assets/ellipse-180.png")}
        />
        <PaymentSection
          iconCode={require("../assets/frame3.png")}
          paymentMethodIconCode="PayPal"
          productCode={require("../assets/vector2.png")}
          propMarginLeft={210}
        />
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame4.png")}
            />
            <Text style={[styles.cashPayment, styles.addCardTypo]}>
              Cash Payment
            </Text>
          </View>
          <Image
            style={[styles.groupInner, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-180.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  addCardTypo: {
    marginLeft: 8,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 18,
    width: 18,
  },
  rectangleLayout: {
    height: 56,
    width: 343,
  },
  selectThePayment: {
    fontSize: FontSize.med_size,
    fontWeight: "300",
    color: Color.colorBlack,
    opacity: 0.6,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 56,
    width: 343,
    position: "absolute",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  addCard: {
    fontWeight: "600",
    color: Color.praimary,
    display: "flex",
    width: 163,
    height: 16,
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  frameChild: {
    marginLeft: 97,
  },
  frameParent: {
    top: 16,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  cashPayment: {
    color: Color.grayBlack,
  },
  groupInner: {
    top: 19,
    left: 308,
    position: "absolute",
    height: 18,
    width: 18,
  },
  rectangleGroup: {
    marginTop: 24,
  },
  groupParent: {
    marginTop: 16,
  },
  selectThePaymentMethodYouParent: {
    top: 246,
  },
});

export default AddCardSection;
