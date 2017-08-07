import { configure } from '@storybook/react';

function load() {
  require('./year-select');
  require('./month-select');
  require('./day-select');
}

configure(load, module);