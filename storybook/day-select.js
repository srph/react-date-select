import React from 'react';
import {storiesOf} from '@storybook/react';
import {DaySelect, MonthSelect, YearSelect} from '../src';

storiesOf('DaySelect', module)
  .add('basic', () => (
    <DaySelect month={2} />
  ))
  .add('controlled', () => {
    class Controlled extends React.Component {
      state ={
        month: '',
        day: '',
      }

      render() {
        return (
          <div>
            <MonthSelect value={this.state.month} onChange={this.handleMonthChange} />
            <DaySelect month={this.state.month} value={this.state.day} onChange={this.handleDayChange} />
          </div>
        );
      }

      handleMonthChange = value => {
        this.setState({ month: value });
      }

      handleDayChange = value => {
        this.setState({ day: value });
      }
    }

    return <Controlled />
  })
  .add('controlled with year', () => {
    class Controlled extends React.Component {
      state = {
        year: '',
        month: '',
        day: '',
      }

      render() {
        return (
          <div>
            <YearSelect value={this.state.year} onChange={this.handleYearChange} />
            <MonthSelect value={this.state.month} onChange={this.handleMonthChange} />
            <DaySelect year={this.state.year} month={this.state.month} value={this.state.day} onChange={this.handleDayChange} />
          </div>
        );
      }

      handleYearChange = value => {
        this.setState({ year: value });
      }

      handleMonthChange = value => {
        this.setState({ month: value });
      }

      handleDayChange = value => {
        this.setState({ day: value });
      }
    }

    return <Controlled />
  })
  .add('custom placeholder', () => (
    <DaySelect month={1} placeholder="Enter a day plz." />
  ))
  .add('custom month placeholder', () => (
    <DaySelect month={''} monthPlaceholder="Enter a month 1st plz." />
  ));