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

export default App;
