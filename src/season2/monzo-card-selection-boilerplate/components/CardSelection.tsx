import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

import Card, { Card as CardModel, CARD_WIDTH, CARD_HEIGHT } from "./Card";
import CheckIcon from "./CheckIcon";
import Thumbnail from "./Thumbnail";

interface CardSelectionProps {
  cards: [CardModel, CardModel, CardModel];
}

const INITIAL_INDEX: number = -1;
const duration = 500;

export default ({ cards }: CardSelectionProps) => {
  const selectedCard = useSharedValue(INITIAL_INDEX);
  const isFirstTap = useSharedValue(true);
  const translateOrigin = useSharedValue(CARD_WIDTH / 2);
  const cardRotation = cards.map((_, ind) => useSharedValue(0));
  const cardTranslation = cards.map((_, ind) => useSharedValue(0));
  const cardZIndex = cards.map((_, ind) => useSharedValue(0));
  // const cardAnimations = cards.map((_, ind) => ({
  //   translateY: useSharedValue(0),
  //   rotate: useSharedValue(0),
  //   zIndex: useSharedValue(0),
  // }));

  useEffect(() => {
    setTimeout(() => {
      runOnUI(initRotate)();
    }, duration);
  }, []);

  const initRotate = () => {
    "worklet";
    cardRotation[0].value = withTiming(-25, { duration });
    cardRotation[2].value = withTiming(25, { duration });
  };

  const onFirstTapCard = (index: number) => {
    translateOrigin.value = withTiming(0, { duration });
    cardRotation[0].value = withTiming(15, { duration });
    cardRotation[1].value = withTiming(-15, { duration });
    cardRotation[2].value = withTiming(0, { duration }, () => {
      isFirstTap.value = false;
      runOnJS(selectedCardTransition)(index);
    });
  };

  const adjustOther = (index: number) => {
    let isFirst = true;
    cards.map((_, ind) => {
      if (ind !== index) {
        if (isFirst) {
          cardRotation[ind].value = withTiming(15, { duration });
          isFirst = false;
        } else {
          cardRotation[ind].value = withTiming(-15, { duration });
        }
      }
    });
  };

  const selectedCardTransition = (index: number) => {
    cardTranslation[index].value = withTiming(
      -CARD_HEIGHT * 1,
      { duration: duration / 2 },
      () => {
        cardZIndex[index].value =
          Math.max(
            cardZIndex[0].value,
            cardZIndex[1].value,
            cardZIndex[2].value
          ) + 1;
        cardTranslation[index].value = withTiming(
          0,
          {
            duration: duration / 2,
          },
          () => {
            runOnJS(adjustOther)(index);
          }
        );
      }
    );
    cardRotation[index].value = withTiming(
      25,
      { duration: duration / 2 },
      () => {
        cardRotation[index].value = withTiming(0, { duration: duration / 2 });
      }
    );
  };

  const handleSelectCard = (index: number) => {
    if (selectedCard.value === INITIAL_INDEX && isFirstTap.value) {
      onFirstTapCard(index);
    } else {
      selectedCardTransition(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {cards.map((card, index) => {
          return (
            <Card
              translateX={translateOrigin}
              cardRotation={cardRotation[index]}
              cardTranslation={cardTranslation[index]}
              cardZIndex={cardZIndex[index]}
              key={card.id}
              {...{ card, index }}
            />
          );
        })}
      </View>
      <SafeAreaView>
        {cards.map(({ id, name, color, thumbnail }, index) => (
          <RectButton key={id} onPress={() => handleSelectCard(index)}>
            {/* //onPress={() => selectCard(index)}> */}
            <View style={styles.button} accessible pointerEvents="none">
              <Thumbnail {...{ thumbnail }} />
              <View style={styles.label}>
                <Text>{name}</Text>
              </View>
              <CheckIcon selectedCard={selectedCard} {...{ color, index }} />
            </View>
          </RectButton>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    flex: 1,
    backgroundColor: "#f4f6f3",
  },
  button: {
    flexDirection: "row",
  },
  label: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#f4f6f3",
    justifyContent: "center",
  },
});
