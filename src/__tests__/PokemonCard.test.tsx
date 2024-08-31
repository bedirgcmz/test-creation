import PokemonCard from "@/components/PokemonCard"
import {render, screen, fireEvent} from "@testing-library/react"

beforeEach(() => {
render(<PokemonCard />)
fetchMock.resetMocks();
})

describe("test getting pokemon informations and rendered correctly",() => {
    test("Test pokemon container rendered correctly", () => {
       
    const pokeContainerEl = screen.queryByTestId("pokemon-container")
    expect(pokeContainerEl).toBeInTheDocument()
    })

    test("Test button that get pokemon rendered correctly", () => {
       
    const buttonEl = screen.queryByRole("button")
    expect(buttonEl).toBeInTheDocument()
    expect(buttonEl).toHaveTextContent("Get Random Pokemon")
    })


    // test("Test fetch rendered correctly", async () => {
    //     // Mock pokemon data
    //     fetchMock.mockResponseOnce(JSON.stringify({
    //         name: 'pikachu',
    //         sprites: { front_default: 'pikachu_image_url' }
    //     }));

    //     const redirectionSentence = screen.queryByTestId("redirection-sentence");
    //     expect(redirectionSentence).toBeInTheDocument();

    //     const buttonEl = screen.getByTestId("get-button");
    //     fireEvent.click(buttonEl);

    //     await new Promise((resolve) => setTimeout(resolve, 3000));

    //     const pokeImg = screen.queryByTestId("poke-img");
    //     expect(pokeImg).toBeInTheDocument();
    //     expect(redirectionSentence).not.toBeInTheDocument();
    // });


})
