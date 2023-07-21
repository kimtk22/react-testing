import { render, screen } from "@testing-library/react"
import Greet from './Greet'

/**
 * 1. Greet should render the text hello 
 * 2. if a name is passed into the component, It should render hello followed by the name
 */

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet/>);
        const text = screen.getByText(/Hello/i);
        expect(text).toBeInTheDocument();
    });
});
describe('Nested', () => {
    test('Greet renders with a name', () => {
        render(<Greet name='kimtk' />);
        const text = screen.getByText('Hello kimtk');
        expect(text).toBeInTheDocument();
    });
});
