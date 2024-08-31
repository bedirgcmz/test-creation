import Footer from "@/components/Footer"
import {render, screen} from "@testing-library/react"

beforeEach(() => {
render(<Footer />)
})

test("Test footer container rendered correctly", () => {
   
const footerContainer = screen.queryByTestId("footer")
expect(footerContainer).toBeInTheDocument()

})


test("Test footer content rendered correctly", () => {
   
const footerContent = screen.queryByText(/Bedir Gocmez/i)
expect(footerContent).toBeInTheDocument()

})