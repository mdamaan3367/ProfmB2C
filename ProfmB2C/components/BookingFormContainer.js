import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BookingFormContainer = () => {
  return (
    <View style={styles.lineParent}>
      <View style={styles.groupChild} />
      <View style={[styles.groupItem, styles.groupBorder]} />
      <View style={[styles.groupInner, styles.groupBorder]} />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.frameChild, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-183.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <Text style={[styles.booking, styles.bookingTypo]}>{`Booking `}</Text>
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-184.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>2</Text>
        </View>
        <Text style={[styles.location, styles.textClr]}>Location</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-184.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>3</Text>
        </View>
        <Text style={[styles.location, styles.textClr]}>Payment</Text>
      </View>
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={styles.ellipseLayout}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-186.png")}
          />
          <Text style={[styles.text3, styles.textClr]}>4</Text>
        </View>
        <Text style={[styles.location, styles.textClr]}>Summary</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    opacity: 0.5,
    borderColor: Color.a6A6A6,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  framePosition: {
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
  },
  textTypo: {
    height: 16,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    justifyContent: "center",
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    position: "absolute",
  },
  bookingTypo: {
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.grayBlack,
    textAlign: "center",
  },
  groupChild: {
    left: 38,
    borderColor: Color.praimary,
    height: 1,
    width: 37,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 21,
    position: "absolute",
  },
  groupItem: {
    left: 107,
  },
  groupInner: {
    left: 177,
  },
  frameChild: {
    zIndex: 0,
  },
  text: {
    color: Color.whait,
    zIndex: 1,
    textAlign: "center",
    height: 16,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    marginLeft: -4,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  booking: {
    color: Color.colorBlack,
    width: 39,
    justifyContent: "center",
    display: "flex",
    fontWeight: "600",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    alignItems: "center",
  },
  frameParent: {
    left: 0,
  },
  ellipseIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    height: 16,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    justifyContent: "center",
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    position: "absolute",
    color: Color.grayBlack,
    marginLeft: -4,
  },
  location: {
    fontWeight: "300",
    marginTop: 4,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_3xs,
  },
  groupParent: {
    left: 70,
    alignItems: "flex-end",
  },
  groupContainer: {
    left: 140,
  },
  text3: {
    marginLeft: -4.5,
    height: 16,
    width: 8,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    left: "50%",
    top: 12,
    justifyContent: "center",
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    position: "absolute",
    color: Color.grayBlack,
  },
  frameView: {
    left: 210,
  },
  lineParent: {
    top: 142,
    left: 61,
    width: 253,
    height: 56,
    position: "absolute",
  },
});

export default BookingFormContainer;
