import { render, screen } from '@testing-library/react';
import {SomeAPI} from './somethingWithAPI'


jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    connect: jest.fn,
    useSelector: jest.fn()
    
  })) 



  describe("SomeAPI", () => {
    
    
    it('matches snapshot online', () => {
        const component = render(<SomeAPI />)

        expect(component).toMatchSnapshot()
    })

    it('find', () => {
      // var reg = new RegExp("[0-9]", "i")

     render(<SomeAPI />)

     const wrapper = screen.getByText(/Some/i)

     expect(wrapper).toBeInTheDocument()
  })
}) 