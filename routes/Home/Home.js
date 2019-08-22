import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Feather';
import { Container } from './styles';
import TopBar from '../../components/TopBar';
import { ContentContainer } from '../../components/Content/styles';
import Menu from '../../components/Content/Menu';
import Cards from '../../components/Cards';
import BottomNav from '../../components/BottomNav';
import { CardContainer } from '../../components/Cards/styles';

export default function Home() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 430 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 430 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <TopBar />
      <ContentContainer>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <CardContainer
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-400, 0, 430],
                  outputRange: [-50, 0, 400],
                  extrapolate: 'clamp',
                }),
              }],
            }}
          >
            <Cards />
          </CardContainer>
        </PanGestureHandler>
      </ContentContainer>
      <BottomNav translateY={translateY} />
    </Container>
  );
}
