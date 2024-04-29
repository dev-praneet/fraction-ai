import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { MutableRefObject, useRef } from 'react';

type OffsetTypes = 'start start' | 'start end' | 'end start' | 'end end';

type UseSpringScrollWithRefArg = {
  inputRange: number[];
  outputRange: number[];
  springParams?: {
    stiffness: number;
    damping: number;
    restData: number;
  };
  offset?: [OffsetTypes, OffsetTypes];
};

const defaultSpringParams = {
  stiffness: 110,
  damping: 30,
  restDelta: 0.001,
};

export function useSpringScrollWithRef(arg: UseSpringScrollWithRefArg) {
  const { inputRange, outputRange, springParams = defaultSpringParams, offset = ['start start', 'end end'] } = arg;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  let outputValue = useTransform(scrollYProgress, inputRange, outputRange);
  outputValue = useSpring(outputValue, springParams);

  return [targetRef, outputValue] as [MutableRefObject<null>, MotionValue<number>];
}

type UseSpringScrollArg = UseSpringScrollWithRefArg & {
  ref: MutableRefObject<null>;
};

export function useSpringScroll(arg: UseSpringScrollArg) {
  const {
    ref: targetRef,
    inputRange,
    outputRange,
    springParams = defaultSpringParams,
    offset = ['start start', 'end end'],
  } = arg;
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  let outputValue = useTransform(scrollYProgress, inputRange, outputRange);
  outputValue = useSpring(outputValue, springParams);

  return outputValue;
}

export function useRegularScrollWithRef(arg: UseSpringScrollWithRefArg) {
  const { inputRange, outputRange, offset = ['start start', 'end end'] } = arg;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  let outputValue = useTransform(scrollYProgress, inputRange, outputRange);

  return [targetRef, outputValue] as [MutableRefObject<null>, MotionValue<number>];
}

export function useRegularScroll(arg: UseSpringScrollArg) {
  const { ref: targetRef, inputRange, outputRange, offset = ['start start', 'end end'] } = arg;
  const { scrollYProgress } = useScroll({ target: targetRef, offset });
  let outputValue = useTransform(scrollYProgress, inputRange, outputRange);

  return outputValue;
}
