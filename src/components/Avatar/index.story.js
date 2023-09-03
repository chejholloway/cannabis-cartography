import React from 'react';
import storyBuilder from '../../storyBuilder';

import Avatar from './';

export const mockProps = {
  img: "https://images.weedmaps.com/deliveries/000/008/153/avatar/square_fill/1550007648-Updated_Logo_WM.png",
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <Avatar
    img={knobs.text('img', props.img || '')}
    width={`${String(knobs.number('width', 70))}px`}
    height={`${String(knobs.number('height', 70))}px`}
  />
);

export const scenarios = {
  'default': renderScene({
    ...Avatar.defaultProps,
  }),
  'img': renderScene({
    ...Avatar.defaultProps,
    img: mockProps.img,
  }),
};

storyBuilder(scenarios, 'components/avatar');
