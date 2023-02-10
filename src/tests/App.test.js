import App from '../App'
import { shallow } from 'enzyme'

const setup = () => shallow(<App />)


const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

it('App Component Renders Without Error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")

  expect(appComponent.length).toBe(1)
})

// import React from 'react';

// const App = () => {
// return (
// <div data-test='component-app'>
// <h1>App Component</h1>
// </div>
// );
// }

// export default App;