import React from 'react';
import storyBuilder from '../../storyBuilder';

import LoadingBars from './';

export const scenarios = {
  'default': (
    <LoadingBars />
  ),
};

storyBuilder(scenarios, 'components/loading_bars');
