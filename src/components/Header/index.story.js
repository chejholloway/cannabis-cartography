import React from 'react';
import storyBuilder from '../../storyBuilder';

import Header from './';

export const scenarios = {
	default: () => <Header />
};

storyBuilder(scenarios, 'componentsHeader');
