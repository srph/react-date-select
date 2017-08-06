import React, {Component} from 'react';
import range from 'lodash/range';
import omit from 'lodash/omit';

export default class DaySelect extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.month !== this.props.month ) {
      this.props.onChange && this.props.onChange(0);
    }
  }

  render() {
    const month = Number(this.props.month);
    const props = omit(this.props, ['month', 'onChange']);
    // Last day of the month
    // http://stackoverflow.com/a/13773408/2698227
    let last = new Date();
    last.setMonth(month ? 1 : month + 1)
    last.setDate(0);
    last = last.getDate();

    return (
      <select {...props} onChange={this.change}>
        <option value="0">{month ? 'Select day' : 'Select month first...'}</option>
        {month && range(1, last).map((day) =>
          <option key={day} value={day}>{day}</option>
        )}
      </select>
    );
  }

  change(evt) {
    this.props.onChange && this.props.onChange(evt.target.value);
  }
}
