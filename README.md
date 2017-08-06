# React Date Select
Generic `select` elements for dates - year, month, and day.

## Installation
```
npm i @srph/react-date-select
```

## Usage
```js
import React from 'react';
import {YearSelect, MonthSelect, DaySelect} from '@srph/react-date-select';

class App extends React.Component {
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

### YearSelect

All other props are passed down to the `select` element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| start | `number` | The starting year. Defaults to `1970` |
| end | `number` | The ending year range. Defaults to `new Date().getFullYear()` |
| placeholder | `string` | The placeholder text when select has a no value |
| onChange | `function` | The callback when value changes |

### MonthSelect

All other props are passed down to the `select` element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| placeholder | `string` | The placeholder text when select has a no value |
| onChange | `function` | The callback when value changes |

### DaySelect

All other props are passed down to the `select` element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| month | `string` (required) | The month to be used as basis for the days |
| monthPlaceholder | `string` | The placeholder text when month is null |
| placeholder | `string` | The placeholder text when select has a no value |
| onChange | `function` | The callback when value changes |

## Setup
You can check the demo, or build it yourself locally:
```bash
npm install
npm run start
```