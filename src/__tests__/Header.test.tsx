import Header from "@/components/Header"
import {render, screen} from "@testing-library/react"

beforeEach(() => {
    render(<Header />)

})

test("Header rendered correctly", ( ) => {
const headerElement = screen.getByTestId("header")

expect(headerElement).toBeInTheDocument()
})

test("Header rendered correctly", ( ) => {
    const h1Element = screen.getByRole("heading")
    
    expect(h1Element).toHaveTextContent("Pokemon Finder")
})