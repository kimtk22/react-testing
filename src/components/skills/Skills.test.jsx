import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'Spring boot'];

    beforeEach(() => {
        render(<Skills skills={skills}/>);
    });

    test('renders correctly', () => {
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list of skills', () => {
        const listItemElements = screen.getAllByRole("listitem");   
        expect(listItemElements).toHaveLength(skills.length);
    });

    test('renders Login button', () => {
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    });

    test('Start learning button is not rendered', () => {
        const loginButton = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(loginButton).not.toBeInTheDocument();
    });

    test('Start learning button is eventually displayed', async () => {
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start learning'
        },{timeout: 3000});
        expect(startLearningButton).toBeInTheDocument();
    });

});