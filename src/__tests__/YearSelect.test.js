import React from 'react'
import YearSelect from '../YearSelect'
import {shallow} from 'enzyme'

test('empty value should show default placeholder', () => {
  const wrapper = shallow(<YearSelect />)
  expect(wrapper.children().contains(<option>Select year</option>)).toBe(true)
})

test('custom placeholder', () => {
  const wrapper = shallow(<YearSelect placeholder="Wazzup yo?" />)
  expect(wrapper.children().contains(<option>Wazzup yo?</option>)).toBe(true)
})

test('default start and end', () => {
  const wrapper = shallow(<YearSelect />)
  const now = new Date().getFullYear();
  // 2 = 1 (addition option) + 1 (range)
  expect(wrapper.children().length).toBe(now - 1970 + 2);
  expect(wrapper.children().at(1).contains(<option value={1970}>{1970}</option>)).toBe(true);
  expect(wrapper.children().last().contains(<option value={now}>{now}</option>)).toBe(true);
})

test('custom start and end', () => {
  const wrapper = shallow(<YearSelect start={2000} end={2017} />)
  expect(wrapper.children().length).toBe(19);
  expect(wrapper.children().at(1).contains(<option value={2000}>{2000}</option>)).toBe(true);
  expect(wrapper.children().last().contains(<option value={2017}>{2017}</option>)).toBe(true);
})

test('onChange callback', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<YearSelect onChange={onChange} />)
  wrapper.find('select').simulate('change', { target: { value: 31 } });
  expect(onChange.mock.calls[0][0]).toBe(31)
})

test('all other props are passed to the select element', () => {
  const onChange = () => {};
  const wrapper = shallow(<YearSelect value={1} onChange={onChange} className="hey" sup="yow" id="5" />)
  const select = wrapper.find('select')
  expect(select.prop('onChange')).not.toBe(onChange)
  expect(select.prop('value')).toBe(1)
  expect(select.prop('start')).toBe(undefined)
  expect(select.prop('end')).toBe(undefined)
  expect(select.prop('className')).toBe('hey')
  expect(select.prop('sup')).toBe('yow')
  expect(select.prop('id')).toBe('5')
})