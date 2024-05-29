import { render, screen, fireEvent } from '@testing-library/react';

import Booking from "./Booking";
import Input from '../components/Input/Input';
import { SUCCESS_RESULT_1 } from '../mocks/handlers';

describe ('Booking', () => {
    
    it('shows as many shoes inputs and remove buttons as expected by clicking on add and remove', () => {
        render(
            <Booking />
        );

        const addButton = screen.getByText('+');
        //query betyder att det inte måste finnas, utan man frågar. Medan get, då måste den finnas, dock endast en.
        
        let sizeInputs = screen.queryAllByTestId('shoe-input');
        let removeButtons = screen.queryAllByText('-');
        expect(sizeInputs).toHaveLength(0);
        expect(removeButtons).toHaveLength(0);

        fireEvent.click(addButton);
        
        // sizeInputs = screen.queryAllByLabelText('Shoe size / person 1');
        sizeInputs = screen.queryAllByTestId('shoe-input');
        removeButtons = screen.queryAllByText('-');

        expect(sizeInputs).toHaveLength(1);
        expect(removeButtons).toHaveLength(1);

        // Add a second pair of shoes
        fireEvent.click(addButton);
        
        sizeInputs = screen.queryAllByTestId('shoe-input');
        removeButtons = screen.queryAllByText('-');

        expect(sizeInputs).toHaveLength(2);
        expect(removeButtons).toHaveLength(2);

        // Add shoe sizes to the two pairs of shoes
        fireEvent.change(sizeInputs[0], { target: { value: '37' }});
        fireEvent.change(sizeInputs[1], { target: { value: '38' }});

        expect(sizeInputs[0]).toHaveValue('37');
        expect(sizeInputs[1]).toHaveValue('38');
        
        // Remove the first pair of shoes, and check that the remaining one have size 38
        fireEvent.click(removeButtons[0]);
        
        sizeInputs = screen.queryAllByTestId('shoe-input');
        removeButtons = screen.queryAllByText('-');
        
        expect(sizeInputs).toHaveLength(1);
        expect(removeButtons).toHaveLength(1);
        expect(sizeInputs[0]).toHaveValue('38');

    });
    
    it('shows confirmation page after booking', async() => {
        render(
            <Booking />
        );

        const dateInput = screen.getByLabelText('Date');
        const timeInput = screen.getByLabelText('Time');
        const playersInput = screen.getByLabelText('Number of awesome bowlers');
        const laneInput = screen.getByLabelText('Number of lanes');
        const addButton = screen.getByText('+');
        const bookButton = screen.getByText('strIIIIIike!');
    
        fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
        fireEvent.change(timeInput, { target: { value: '22:50' } });
        fireEvent.change(playersInput, { target: { value: '1' } });
        fireEvent.change(laneInput, { target: { value: '1' } });

        // Try book without adding shoes and expect error message
        fireEvent.click(bookButton);
        // This throws an error if it doesn't find the error message below
        const errorMessage = "Fill out all the fields and make sure that people and shoes is the same number."
        await screen.findByText(errorMessage);

        // Add one pair of shoes
        fireEvent.click(addButton);
        const sizeInputs = screen.queryAllByTestId('shoe-input');

        // Add shoe sizes to the pairs of shoes
        fireEvent.change(sizeInputs[0], { target: { value: '23' }});

        // Book
        fireEvent.click(bookButton);

        const confirmation = await screen.findByTestId('confirmation');

        console.log("Booked! Current page:")
        screen.debug(confirmation);

        const when = screen.getByLabelText('When');
        const who = screen.getByLabelText('Who');
        const lanes = screen.getByLabelText('Lanes');
        const bookingNumber = screen.getByLabelText('Booking number');
        const price = screen.getByTestId('Price');

        expect(when).toHaveValue(SUCCESS_RESULT_1.when);
        expect(who).toHaveValue(SUCCESS_RESULT_1.people);
        expect(lanes).toHaveValue(SUCCESS_RESULT_1.lanes);
        expect(bookingNumber).toHaveValue(SUCCESS_RESULT_1.id);
        expect(price.textContent).toEqual(`${SUCCESS_RESULT_1.price} sek`);

        // Check that clicking on the 'Sweet, let's go!' button takes you back to booking screen
        const sweet = screen.getByText("Sweet, let's go!");
        fireEvent.click(sweet);
        // Check that the confirmation page has been replaced with the booking page
        expect(screen.queryByText("Sweet, let's go!")).toBeFalsy();
        expect(screen.getByText('strIIIIIike!')).toBeTruthy();
    });
})


//testa att confirmation renderas när man skickar bokningen och annars visa bokningssidan.
//testa att det kommer ett felmeddelande om antalet inte stämmer mellan antal skor och personer.