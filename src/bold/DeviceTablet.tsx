/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function DeviceTablet(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={16}
        transform="translate(256) rotate(90)"
        strokeWidth={24}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={48}
        y1={72}
        x2={208}
        y2={72}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={48}
        y1={184}
        x2={208}
        y2={184}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </Svg>
  );
}

export default DeviceTablet;