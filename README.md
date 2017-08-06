# React Date Select
Generic `select` elements for dates - year, month, and day.

## Installation
```
npm i @srph/react-date-select
```

## Usage
```js
import React, { Component } from 'react';
import './App.css';
import YearSelect from './YearSelect';
import MonthSelect from  './MonthSelect';
import DaySelect from './DaySelect';

class App extends Component {
  state = {
    y: 0,
    m: 0,
    d: 0
  }

  render() {
    const {y, m, d} = this.state;

    return (
      <div>
        <YearSelect value={y} onChange={this.handleYearChange} />
        <MonthSelect value={m} onChange={this.handleMonthChange} />
        <DaySelect month={m} value={d} onChange={this.handleDayChange} />
      </div>
    );
  }

  handleYearChange = (value) => {
    this.setState({ y: value });
  }

  handleMonthChange = (value) => {
    this.setState({ m: value });
  }

  handleDayChange = (value) => {
    this.setState({ d: value });
  }
}
```

## API Documentation
Here's a list of props you may use to customize the component for your use-case: