# React Date Select [![npm version](https://img.shields.io/npm/v/@srph/react-date-select.svg?style=flat-square)](https://npmjs.com/packages/@srph/react-date-select) [![Build Status](https://img.shields.io/travis/srph/react-date-select.svg?style=flat-square)](https://travis-ci.org/srph/react-date-select?branch=master)
Generic `select` elements for dates - year, month, and day. [View demo](https://chairman-silences-84025.netlify.com)

## Installation
```bash
npm i @srph/react-date-select
```

### Script tags
If you're not using a bundler like Browserify or Webpack, simply add the script tag after your React script tag.

```html
<!-- Script tags for React and other libraries -->
<script src="https://unpkg.com/@srph/react-date-select/dist/react-date-select.min.js"></script>
```

This library is exposed as `ReactDateSelect` (e.g., `ReactDateSelect.YearSelect`, `ReactDateSelect.MonthSelect`, `ReactDateSelect.DaySelect`).

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
| placeholder | `string` | The placeholder text when select has a no value. Defaults to `Select year`. |
| onChange | `function` | The callback when value changes |

### MonthSelect

All other props are passed down to the `select` element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| placeholder | `string` | The placeholder text when select has a no value. Defaults to `Select month`. |
| onChange | `function` | The callback when value changes |

### DaySelect

All other props are passed down to the `select` element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| year | `string` | The year to be used as basis for the month. Useful for leap years. Defaults to `new Date().getFullYear()`. |
| month | `string` (required) | The month to be used as basis for the days |
| monthPlaceholder | `string` | The placeholder text when month is null. Defaults to `Select month to proceed`. |
| placeholder | `string` | The placeholder text when select has no value. Defaults to `Select day`. |
| onChange | `function` | The callback when value changes |

## Setup
You can check the [demo](https://chairman-silences-84025.netlify.com), or build it yourself locally:
```bash
npm install
npm run start
```

### Bundling package
```
npm run bundle
```

### Publish storybook
```
npm run storybook:publish
```