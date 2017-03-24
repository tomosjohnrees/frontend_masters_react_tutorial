import React from 'react'
import Search from './Search'
import renderer from 'react-test-renderer'

test('Search snapshot test', () => {
  // First time it runs it will create a snapshot and pass. Every other time you make a change you need to tell the snapshot to update
  const component = renderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
