import React, { Component } from 'react';
import range from 'lodash.range';
import T from 'prop-types';

class YearSelect extends Component {
  render() {
    // We'll add an extra number on the `end`
    // because `lodash.range` only goes from x to (y - 1).
    const years = range(this.props.start, this.props.end + 1);

    return (
      <select {...this.props} onChange={this.handleChange}>
        <option>{this.props.placeholder}</option>
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

YearSelect.propTypes = {
  start: T.number,
  end: T.number,
  onChange: T.func,
  placeholder: T.string,
}

YearSelect.defaultProps = {
  start: 1970,
  end: new Date().getFullYear(),
  placeholder: 'Select year'
}

export default YearSelect;