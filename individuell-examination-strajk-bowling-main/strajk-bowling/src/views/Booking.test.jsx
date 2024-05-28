import { render, screen } from '@testing-library/react';

import Booking from "./Booking";
import Input from '../components/Input/Input';

describe ('Booking', () => {
    it('should render inputfileds with date, time, players and lanes')
    render (<Booking />);
    // expect(screen.getByAltText('input__label'))
})


//testa att confirmation renderas när man skickar bokningen och annars visa bokningssidan.
//testa att det kommer ett felmeddelande om antalet inte stämmer mellan antal skor och personer.