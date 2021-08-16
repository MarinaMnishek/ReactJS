import { render, screen } from '@testing-library/react';
import { Profile } from './profile'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { mockStore } from 'redux-mock-store'
import { getMockStore } from 'redux-mock-store';
import thunk from 'redux-thunk'


jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  connect: jest.fn,
  useSelector: jest.fn(),

}))



describe("Profile", () => {

  it('to do something', () => {
    const initialState = {}
    const store = mockStore(initialState)
    render(<Provider store={store}><Profile /></Provider>)
    wrapper = screen.getByText(/Hell/i)
    expect(wrapper).toBeInTheDocument()
  })
})


//   describe("Profile", () => {

//     it('matches snapshot online', () => {
//         const component = render(<Profile />)

//         expect(component).toMatchSnapshot()
//     })
// }) 


// describe("Profile", () => {

//   it('to do something', () => {
//     const middlewares = [thunk]
//     const mockStore = configureStore(middlewares)
//     const store = mockStore({})
//     console.log(store)
   
//     render(<Provider store={store}><Profile /></Provider>)
//     wrapper = screen.getByText(/Hell/i)
//     expect(wrapper).toBeInTheDocument()
    
//   })
// })
