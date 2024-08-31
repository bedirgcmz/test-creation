import Home from "@/app/page"
import {render, screen} from "@testing-library/react"

test("Test home page rendered correctly", () => {
render(<Home />)

const mainElemenet = screen.getByRole("main")

expect(mainElemenet).toBeInTheDocument()

})