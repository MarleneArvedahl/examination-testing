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

// describe('Shoes', () => {
//     it('shows an add show button and zero inputs initially', () => {
//         // Implementera simuleringar av funktionerna updateSize, addShoe och removeShoe
//         const updateSize = jest.fn();
//         const addShoe = jest.fn();
//         const removeShoe = jest.fn();

//         // Simulera en array med skor
//         const shoes = [];

//         // Rendera komponenten med de nödvändiga propsen
//         render(<Shoes updateSize={updateSize} addShoe={addShoe} removeShoe={removeShoe} shoes={shoes} />);

//         // Debugga komponenten för att inspektera dess DOM-struktur
//         screen.debug();

//         // Sök efter storleksinmatningsfältet med hjälp av data-testid
//         const sizeInput = screen.queryByTestId('shoe-input');

//         // Verifiera att storleksinmatningsfältet är tomt initialt
//         expect(sizeInput).toHaveValue(null);

//         // Hämta referenser till knapparna för att lägga till och ta bort skor
//         const addButton = screen.getByText('+');
//         const removeButton = screen.getByText('-');

//         // Klicka på knappen för att lägga till skor och verifiera att storleksinmatningsfältet visas
//         fireEvent.click(addButton);
//         expect(screen.getByLabelText('Shoe size / person 1')).toBeInTheDocument();

//         // Klicka på knappen för att ta bort skor och verifiera att storleksinmatningsfältet inte längre finns
//         fireEvent.click(removeButton);
//         expect(screen.queryByLabelText('Shoe size / person 1')).not.toBeInTheDocument();
//     });
// });

// // import { render, screen, fireEvent } from '@testing-library/react';

// // import Shoes from './Shoes';

// // describe ('Shoes',() => {
// //     it('shows an add show button and zero inputs initially', () => {
// //         render(<Shoes updateSize={() => {}} addShoe={() => {}} removeShoe={() => {}} shoes={[]} />);

// //         screen.debug();
// //         // queryByTestId
// //         const sizeInput = screen.queryByTestId('shoe-input');

// //         expect(sizeInput).toHaveValue(null);

// //         const addButton = screen.getByText('+');
// //         const removeButton = screen.getByText('-');

// //      fireEvent.click(addButton);
// //      expect(screen.getByLabelText('Shoe size / person 1')).toBeInTheDocument();

// //      fireEvent.click(removeButton);
// //      expect(screen.queryByLabelText('Shoe size / person 1')).not.toBeInTheDocument();
// //   });

// //       });
