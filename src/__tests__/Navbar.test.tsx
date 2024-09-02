import Navbar from "@/components/Navbar"
import {render, screen} from "@testing-library/react"

beforeEach(() => {
render(<Navbar />)
})

test("Test navbar rendered correctly", () => {
const navbar = screen.getByRole("navigation")
expect(navbar).toBeInTheDocument()
})


test("Test favorite link rendered correctly", () => {
const favoriteLink = screen.queryByTestId("favorite-link")
expect(favoriteLink).toBeInTheDocument()
expect(favoriteLink).toHaveTextContent("My Favorites List")
})

test("Test home link rendered correctly", () => {
const homeLink = screen.queryByTestId("home-link")
expect(homeLink).toBeInTheDocument()
expect(homeLink).toHaveTextContent("Get Pokemon")
})
