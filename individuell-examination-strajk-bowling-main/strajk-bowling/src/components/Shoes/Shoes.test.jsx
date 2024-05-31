import { render, screen, fireEvent, jest } from '@testing-library/react';
import Shoes from './Shoes';

/**
 * https://testing-library.com/docs/react-testing-library/cheatsheet/
 */

describe('Shoes', () => {
    it('shows an add shoes button and initially zero inputs and no remove button', () => {
        render(
            <Shoes
                updateSize={() => {}}
                addShoe={() => {}}
                removeShoe={() => {}}
                shoes={[]}
            />
        );

        // screen.debug();
        
        const sizeInputs = screen.queryAllByTestId('shoe-input');

        expect(sizeInputs).toHaveLength(0);

        const addButton = screen.getByText('+');

        expect(addButton).toBeTruthy();
        
        const removeButton = screen.queryByText('-');
        
        expect(removeButton).toBeFalsy();
    });

});
