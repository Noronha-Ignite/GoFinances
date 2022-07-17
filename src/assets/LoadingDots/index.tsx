import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

type LoadingDotsProps = {
  size?: number;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({ size }) => {
  const animationProgress = useRef(new Animated.Value(0))
  useEffect(() => {
    Animated.loop(Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false,
    })).start();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Lottie
        source={require('./animation.json')}
        progress={animationProgress.current}
        style={{
          width: size,
          height: size,
        }}
      />
    </View>
  );
}