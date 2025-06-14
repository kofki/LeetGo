import { Text, Animated, PanResponder } from 'react-native';
import { useRef } from 'react';

export const DragDropBox = (title="Hello", color="red", height=100, width=100) => {
    const pan = useRef(new Animated.ValueXY()).current;
      const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove : Animated.event([null, {dx: pan.x, dy: pan.y}]),
          onPanResponderRelease: () => {
            Animated.spring(pan, {
              toValue: {x: 0, y: 0},
              useNativeDriver: true
            }).start();
          },
        }),
      ).current;
    return (
         <Animated.View style={{width: width, height: height, backgroundColor: color, alignSelf: 'center', margin: 100, 
                transform: [{translateX: pan.x}, {translateY: pan.y}], }} {...panResponder.panHandlers}>
                <Text style={{color: 'white', marginTop: '50%'}}>{title}</Text>
              </Animated.View>
    );
}