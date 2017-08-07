import React from 'react';
import {storiesOf} from '@storybook/react';
import {YearSelect} from '../';

storiesOf('YearSelect', module)
  .add('basic', () => (
    <YearSelect />
  ))
  .add('controlled', () => {
    class Controlled extends React.Component {
      state ={
        year: ''
      }

      render() {
        return <YearSelect value={this.state.year} onChange={this.handleChange} />
      }

      handleChange = value => {
        this.setState({ year: value });
      }
    }

    return <Controlled />
  })
  .add('custom start and end', () => (
    <YearSelect start={new Date().getFullYear()} end={new Date().getFullYear() + 20} />
  ))
  .add('custom placeholder', () => (
    <YearSelect placeholder="Enter a year plz." />
  ));