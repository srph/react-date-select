import React from 'react';
import {storiesOf} from '@storybook/react';
import {MonthSelect} from '../';

storiesOf('MonthSelect', module)
  .add('basic', () => (
    <MonthSelect />
  ))
  .add('controlled', () => {
    class Controlled extends React.Component {
      state ={
        month: ''
      }

      render() {
        return <MonthSelect value={this.state.month} onChange={this.handleChange} />
      }

      handleChange = value => {
        this.setState({ month: value });
      }
    }

    return <Controlled />
  })
  .add('custom placeholder', () => (
    <MonthSelect placeholder="Enter a month plz." />
  ));