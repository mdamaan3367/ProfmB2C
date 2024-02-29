import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const SectionForm = () => {
  return (
    <View>
      <Text style={styles.selectDate}>Select date</Text>
      <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
        <View>
          <View style={[styles.january2024Parent, styles.parentFlexBox]}>
            <Text style={styles.january2024}>January 2024</Text>
            <View style={styles.arrowCircleLeftParent}>
              <Image
                style={styles.arrowIconLayout}
                resizeMode="cover"
                source={require("../assets/arrowcircleleft.png")}
              />
              <Image
                style={[styles.arrowCircleRightIcon, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrowcircleright.png")}
              />
            </View>
          </View>
          <View style={[styles.groupParent, styles.parentFlexBox]}>
            <View style={[styles.parent, styles.groupLayout]}>
              <Text style={[styles.text, styles.textLayout]}>14</Text>
              <Text style={[styles.sun, styles.sunPosition]}>SUN</Text>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text, styles.textLayout]}>15</Text>
              <Text style={[styles.sun, styles.sunPosition]}>MON</Text>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text, styles.textLayout]}>16</Text>
              <Text style={[styles.sun, styles.sunPosition]}>TUE</Text>
            </View>
            <View style={[styles.rectangleParent, styles.frameWrapperFlexBox]}>
              <View style={styles.frameChild} />
              <View style={[styles.groupView, styles.text6Position]}>
                <Text style={[styles.text3, styles.wedTypo]}>17</Text>
                <Text style={[styles.wed, styles.wedTypo]}>WED</Text>
              </View>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text, styles.textLayout]}>18</Text>
              <Text style={[styles.sun, styles.sunPosition]}>THU</Text>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text, styles.textLayout]}>19</Text>
              <Text style={[styles.sun, styles.sunPosition]}>FRI</Text>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text6, styles.text6Position]}>20</Text>
              <Text style={[styles.sun, styles.sunPosition]}>SAT</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowIconLayout: {
    height: 20,
    width: 20,
  },
  groupLayout: {
    width: 32,
    height: 48,
  },
  textLayout: {
    height: 24,
    top: 24,
  },
  sunPosition: {
    top: 0,
    marginLeft: -16,
    width: 32,
    fontSize: FontSize.med_size,
    height: 16,
  },
  text6Position: {
    marginLeft: -16,
    left: "50%",
    position: "absolute",
    width: 32,
  },
  wedTypo: {
    color: Color.whait,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  selectDate: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    width: 96,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  january2024: {
    color: Color.a6A6A6,
    width: 79,
    textAlign: "center",
    fontWeight: "300",
    fontSize: FontSize.med_size,
    justifyContent: "center",
    height: 16,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  arrowCircleRightIcon: {
    marginLeft: 10,
  },
  arrowCircleLeftParent: {
    marginLeft: 181,
    flexDirection: "row",
  },
  january2024Parent: {
    flexDirection: "row",
  },
  text: {
    width: 24,
    marginLeft: -12,
    height: 24,
    top: 24,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  sun: {
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    left: "50%",
    position: "absolute",
  },
  parent: {
    height: 48,
  },
  group: {
    marginLeft: 13,
    height: 48,
  },
  frameChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.praimary,
    width: 40,
    height: 72,
    zIndex: 0,
  },
  text3: {
    fontSize: FontSize.size_5xl,
    height: 24,
    top: 24,
    width: 24,
    marginLeft: -12,
  },
  wed: {
    top: 0,
    marginLeft: -16,
    width: 32,
    fontSize: FontSize.med_size,
    height: 16,
  },
  groupView: {
    top: 12,
    zIndex: 1,
    height: 48,
  },
  rectangleParent: {
    marginLeft: 13,
    flexDirection: "row",
  },
  text6: {
    height: 24,
    top: 24,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_lg,
    marginLeft: -16,
  },
  groupParent: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.a6A6A6,
    borderWidth: 0.5,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: Padding.p_xs,
    marginTop: 16,
  },
});

export default SectionForm;
