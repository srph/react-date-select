import React, {Component} from 'react';

export default class YearSelect extends Component {
  render() {
    return (
      <select {...this.props} onChange={this.handleChange}>
        <option>Select month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    );
  }

  handleChange = evt => {
    this.props.onChange && this.props.onChange(evt.target.value);
  }
}
