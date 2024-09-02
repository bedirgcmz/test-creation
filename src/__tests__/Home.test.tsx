import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
    // Mock bir içerik ekleyin
    render(
        <RootLayout>
            <main>
                <h1>Home Page Content</h1>
            </main>
        </RootLayout>
    );
});

describe("Test everything is rendered in page correctly", () => {
    test("Test home page rendered correctly", () => {
        const mainElement = screen.getByRole("main");
        expect(mainElement).toBeInTheDocument();
    });

    test("Test navbar rendered correctly in home page", () => {
        const navbar = screen.getByRole("navigation");
        expect(navbar).toBeInTheDocument();
    });

    test("Test header rendered correctly in home page", () => {
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });

    test("Test footer rendered correctly in home page", () => {
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });
});
