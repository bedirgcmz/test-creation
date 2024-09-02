import PokemonCard from "@/components/PokemonCard"
import {render, screen, fireEvent, act} from "@testing-library/react"

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
       
    const buttonEl = screen.queryAllByRole("button")
    expect(buttonEl[0]).toBeInTheDocument()
    expect(buttonEl[1]).toBeInTheDocument()
    expect(buttonEl[0]).toHaveTextContent("Get Random Pokemon")
    expect(buttonEl[1]).toHaveTextContent("Get Pokemon by Name")
    })


    test("Test fetch rendered correctly", async () => {
        // Mock pokemon data
        fetchMock.mockResponseOnce(JSON.stringify({
            name: 'pikachu',
            sprites: { front_default: 'pikachu_image_url' }
        }));

        const redirectionSentence = screen.queryByTestId("redirection-sentence");
        expect(redirectionSentence).toBeInTheDocument();

        const buttonEl = screen.getByTestId("get-random-button");

        await act(async () => {
            fireEvent.click(buttonEl);
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Check if the PokemonDetails component is rendered with correct data
        const pokeImg = screen.queryByTestId("poke-img");
        expect(pokeImg).toBeInTheDocument();
        expect(redirectionSentence).not.toBeInTheDocument();
    });


})


describe("Test for fetching Pokémon by name", () => {
    test("Check if input, button, and container are rendered correctly", () => {
        const containerEl = screen.getByTestId("get-with-name-container");
        
        expect(containerEl).toBeInTheDocument();
    });
    test("Check if input, button, and container are rendered correctly", () => {
        const inputEl = screen.getByPlaceholderText("Enter Pokemon name..");

        expect(inputEl).toBeInTheDocument();
    });
    test("Check if input, button, and container are rendered correctly", () => {
        const buttonEl = screen.getByText("Get Pokemon by Name");

        expect(buttonEl).toBeInTheDocument();
    });

    test("Check if typing in input and button click works", async () => {
        const inputEl = screen.getByPlaceholderText("Enter Pokemon name..") as HTMLInputElement;
        const buttonEl = screen.getByText("Get Pokemon by Name");

        // Simulate typing in the input field
        fireEvent.change(inputEl, { target: { value: "pikachu" } });
        expect(inputEl.value).toBe("pikachu");

        // Simulate clicking the button
        await act(async () => {
            fireEvent.click(buttonEl);
        });

        // Ensure input field retains the typed value
        expect(inputEl.value).toBe("pikachu");
    });

    test("Test fetch by name button click", async () => {
        // Mock pokemon data
        fetchMock.mockResponseOnce(JSON.stringify({
            name: "pikachu",
            sprites: { front_default: "pikachu_image_url" }
        }));

        const inputEl = screen.getByPlaceholderText("Enter Pokemon name..") as HTMLInputElement;
        const buttonEl = screen.getByText("Get Pokemon by Name");

        // Simulate typing in the input field
        fireEvent.change(inputEl, { target: { value: "pikachu" } });

        // Simulate clicking the button
        await act(async () => {
            fireEvent.click(buttonEl);
        });

        // Check if the PokemonDetails component is rendered with correct data
        const pokeImg = screen.getByTestId("poke-img");
        expect(pokeImg).toBeInTheDocument();
    });
});