import React from 'react'
import DaySelect from '../DaySelect'
import {shallow} from 'enzyme'

test('empty month should show default month placeholder and no options', () => {
  const wrapper = shallow(<DaySelect month={''} />)
  expect(wrapper.children().contains(<option value="0">Select month to proceed</option>)).toBe(true)
  expect(wrapper.children().length).toBe(1)
})

test('option values', () => {
  const month = 2;
  const last = new Date(new Date().getFullYear(), month, 0).getDate();  
  const wrapper = shallow(<DaySelect month={month} />)
  expect(wrapper.children().length).toBe(last + 1);
  expect(wrapper.children().at(1).contains(<option value={1}>{1}</option>)).toBe(true);
  expect(wrapper.children().last().contains(<option value={last}>{last}</option>)).toBe(true);
})

test('custom month placeholder', () => {
  const wrapper = shallow(<DaySelect month={''} monthPlaceholder="Select month yo?" />)
  expect(wrapper.children().contains(<option value="0">Select month yo?</option>)).toBe(true)
})

test('empty value should show default placeholder', () => {
  const wrapper = shallow(<DaySelect month={1} />)
  expect(wrapper.children().contains(<option value="0">Select day</option>)).toBe(true)
})

test('custom placeholder', () => {
  const wrapper = shallow(<DaySelect month={1} placeholder="Wazzup yo?" />)
  expect(wrapper.children().contains(<option value="0">Wazzup yo?</option>)).toBe(true)
})

test('onChange callback', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<DaySelect month={1} onChange={onChange} />)
  wrapper.find('select').simulate('change', { target: { value: 31 } });
  expect(onChange.mock.calls[0][0]).toBe(31)
})

test('changing month should reset value', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<DaySelect month={1} onChange={onChange} />)
  wrapper.setProps({ month: 2 });
  expect(onChange.mock.calls[0][0]).toBe(0)
})

test('changing year should reset value', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<DaySelect year={2017} month={1} onChange={onChange} />)
  wrapper.setProps({ year: 2016 });
  expect(onChange.mock.calls[0][0]).toBe(0)
})

test('all other props are passed to the select element', () => {
  const onChange = () => {};
  const wrapper = shallow(<DaySelect month={1} onChange={onChange} className="hey" sup="yow" id="5" />)
  const select = wrapper.find('select')
  expect(select.prop('month')).toBe(undefined)
  expect(select.prop('onChange')).not.toBe(onChange)
  expect(select.prop('className')).toBe('hey')
  expect(select.prop('sup')).toBe('yow')
  expect(select.prop('id')).toBe('5')
})