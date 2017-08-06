import React, { Component } from 'react';
import range from 'lodash.range';

const today = new Date();
const ago = new Date();
ago.setYear(today.getFullYear() - 20);
const years = range(ago.getFullYear(), today.getFullYear() + 1);

export default class YearSelect extends Component {
  render() {
    return (
      <select {...this.props} onChange={this.handleChange}>
        <option>Select year</option>
        {years.map((year, i) =>
          <option value={year} key={year}>{year}</option>
        )}
      </select>
    );
  }

  handleChange = evt => {
    this.props.onChange && this.props.onChange(evt.target.value);
  }
}
