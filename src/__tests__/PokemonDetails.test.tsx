
import PokemonDetails from "@/components/PokemonDetails"
import {render, screen} from "@testing-library/react"

beforeEach(() => {
    const mockData = {
    id: 2,
    name: "",
    height: 2,
    weight: 2,
    sprites: {
        front_default: ""
    }}
render(<PokemonDetails pokemon={mockData} />)
})

test("Test pokemon name rendered correctly", () => {
   
const pokeNameEl = screen.getByTestId("poke-name")
expect(pokeNameEl).toBeInTheDocument()

})


test("Test pokemon image rendered correctly", () => {

const pokeNameEl = screen.queryByTestId("poke-name")
expect(pokeNameEl).toBeInTheDocument()

})


test("Test pokemon features rendered correctly", () => {

const pokeNameEl = screen.queryAllByTestId("poke-features")

expect(pokeNameEl[1]).toBeInTheDocument()
expect(pokeNameEl.length).toBe(2)

})