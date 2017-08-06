import React, {Component} from 'react';
import range from 'lodash.range';
import T from 'prop-types';

export default class DaySelect extends Component {
  componentWillReceiveProps(nextProps) {
    if ( nextProps.month !== this.props.month ) {
      this.props.onChange && this.props.onChange(0);
    }
  }

  render() {
    const month = Number(this.props.month);

    // Select wrapper props
    let props = {...this.props};
    delete props.placeholder;
    delete props.month;
    delete props.monthPlaceholder;
    delete props.onChange;

    // Last day of the month
    // http://stackoverflow.com/a/13773408/2698227
    let last = new Date();
    last.setMonth(month ? 1 : month + 1)
    last.setDate(0);
    last = last.getDate();

    return (
      <select {...props} onChange={this.handleChange}>
        <option value="0">{month ? this.props.placeholder : this.props.monthPlaceholder}</option>
        {month && range(1, last).map((day) =>
          <option key={day} value={day}>{day}</option>
        )}
      </select>
    );
  }

  handleChange = evt => {
    this.props.onChange && this.props.onChange(evt.target.value);
  }
}

DaySelect.propTypes = {
  placeholder: T.string,
  month: T.string.isRequired,
  monthPlaceholder: T.string
}

DaySelect.defaultProps = {
  placeholder: 'Select day',
  monthPlaceholder: 'Select month to proceed'
}