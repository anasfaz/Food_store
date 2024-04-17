import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe('Contact us page Test cases', () => {
    it("should load   contact ", () => {
    
        render(<Contact />)
    
        const heading = screen.getByRole('heading')
        //assertion
        expect(heading).toBeInTheDocument()
    }) 
    //we can use it or test 
    // test("should input box load", () => {
    //     render(<Contact />)
    //     const inputBox = screen.getAllByRole('textbox')
    //     expect(inputBox).toBeInTheDocument()
    // })
})
