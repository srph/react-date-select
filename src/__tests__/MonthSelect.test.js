import React from 'react'
import MonthSelect from '../MonthSelect'
import {shallow} from 'enzyme'

test('empty value should show default placeholder', () => {
  const wrapper = shallow(<MonthSelect />)
  expect(wrapper.children().contains(<option>Select month</option>)).toBe(true)
})

test('custom placeholder', () => {
  const wrapper = shallow(<MonthSelect placeholder="Wazzup yo?" />)
  expect(wrapper.children().contains(<option>Wazzup yo?</option>)).toBe(true)
})

test('onChange callback', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<MonthSelect onChange={onChange} />)
  wrapper.find('select').simulate('change', { target: { value: 31 } });
  expect(onChange.mock.calls[0][0]).toBe(31)
})

test('all other props are passed to the select element', () => {
  const onChange = () => {};
  const wrapper = shallow(<MonthSelect value={1} onChange={onChange} className="hey" sup="yow" id="5" />)
  const select = wrapper.find('select')
  expect(select.prop('onChange')).not.toBe(onChange)
  expect(select.prop('value')).toBe(1)
  expect(select.prop('className')).toBe('hey')
  expect(select.prop('sup')).toBe('yow')
  expect(select.prop('id')).toBe('5')
})