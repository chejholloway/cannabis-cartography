import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

export const mockKnobs = {
  text: (_name, val) => val,
  number: (_name, val) => val,
  boolean: (_name, val) => val,
  object: (_name, val) => val,
  select: (_name, _options, val) => val,
}

export const mountScenario = scenario => mount(
  <Router>
    {scenario(mockKnobs)}
  </Router>
);
