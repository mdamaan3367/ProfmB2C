import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TotalSection = ({
  propTop,
  propMarginTop,
  propLeft,
  propTextAlign,
  propWidth,
}) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const sARStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propLeft, propTextAlign]);

  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.costParent, styles.parentPosition, frameView5Style]}>
      <Text style={styles.cost}>Cost</Text>
      <View style={[styles.rectangleParent, groupView3Style]}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={styles.frameGroup}>
            <View style={styles.regularCleaningCleaningFoParent}>
              <Text style={[styles.regularCleaningContainer, styles.vatTypo]}>
                <Text style={styles.vat15Clr}>{`Regular cleaning `}</Text>
                <Text
                  style={styles.cleaningFor2}
                >{`( Cleaning for 2 hours )  `}</Text>
              </Text>
              <Text style={[styles.sar, styles.sarTypo, sARStyle]}>79 SAR</Text>
            </View>
            <View style={[styles.vat15Parent, frameView6Style]}>
              <Text style={[styles.vat15, styles.vat15Clr]}>
                <Text style={styles.vatTypo}>VAT</Text>
                <Text style={styles.text}>{` (15%) `}</Text>
              </Text>
              <Text style={styles.sarTypo}>12 SAR</Text>
            </View>
          </View>
          <View style={styles.totalParent}>
            <Text style={[styles.total, styles.sar2Typo]}>Total</Text>
            <Text style={[styles.sar2, styles.sar2Typo]}>91 SAR</Text>
          </View>
        </View>
        <View style={[styles.groupItem, styles.groupBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.a6A6A6,
    borderStyle: "solid",
    width: 343,
    position: "absolute",
  },
  vatTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  sarTypo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.med_size,
    textAlign: "left",
    fontWeight: "600",
  },
  vat15Clr: {
    color: Color.grayBlack,
    fontSize: FontSize.med_size,
  },
  sar2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "600",
  },
  cost: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.colorBlack,
    display: "flex",
    width: 125,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "600",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whait,
    borderWidth: 0.5,
    left: 0,
    top: 0,
    height: 153,
  },
  cleaningFor2: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
  },
  regularCleaningContainer: {
    top: 2,
    zIndex: 0,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  sar: {
    left: 264,
    zIndex: 1,
    top: 0,
    position: "absolute",
  },
  regularCleaningCleaningFoParent: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.med,
  },
  vat15: {
    textAlign: "left",
  },
  vat15Parent: {
    width: 303,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frameGroup: {
    height: 52,
    justifyContent: "space-between",
  },
  total: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  sar2: {
    color: Color.red,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
  },
  totalParent: {
    width: 311,
    marginTop: 37,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent: {
    top: 24,
  },
  groupItem: {
    marginLeft: -171.6,
    top: 100,
    left: "50%",
    borderTopWidth: 0.3,
    height: 0,
  },
  rectangleParent: {
    marginTop: 14,
    height: 153,
    width: 343,
  },
  costParent: {
    top: 494,
  },
});

export default TotalSection;
