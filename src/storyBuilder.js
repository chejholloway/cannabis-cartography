import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import * as knobs from '@storybook/addon-knobs/react'

import { GlobalStyle } from './styles';

const storyBuilder = (
  scenarios,
  storyPath,
) => {
  const stories = storiesOf(storyPath, module)
  stories
    .addDecorator(withKnobs({
      escapeHTML: false,
    }))

  Object.keys(scenarios).forEach(key => {
    stories.add(key, () => (
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <div>
            {scenarios[key](knobs)}
          </div>
        </Router>
      </React.Fragment>
    ))
  })
}

export default storyBuilder
