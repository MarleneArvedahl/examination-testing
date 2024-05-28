import { render, screen, fireEvent } from '@testing-library/react';

import BookingInfo from './BookingInfo';

describe ('BookingInfo',() => {
    it('fills in date, time, players, and lane with valid input', () => {
        render(<BookingInfo />);
        
        const dateInput = screen.getByLabelText('Date');
        const timeInput = screen.getByLabelText('Time');
        const playersInput = screen.getByLabelText('Number of awesome bowlers');
        const laneInput = screen.getByLabelText('Number of lanes');
    
        fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
        fireEvent.change(timeInput, { target: { value: '18:00' } });
        fireEvent.change(playersInput, { target: { value: '4' } });
        fireEvent.change(laneInput, { target: { value: '3' } });
    
        expect(dateInput).toHaveValue('2023-10-10');
        expect(timeInput).toHaveValue('18:00');
        expect(playersInput).toHaveValue(4);
        expect(laneInput).toHaveValue(3);
      });

      it('fills in date, time, players, and lane with invalid input', () => {
        render(<BookingInfo />);
        
        const dateInput = screen.getByLabelText('Date');
        const timeInput = screen.getByLabelText('Time');
        const playersInput = screen.getByLabelText('Number of awesome bowlers');
        const laneInput = screen.getByLabelText('Number of lanes');
    
        fireEvent.change(dateInput, { target: { value: 'invalid date' } });
        fireEvent.change(timeInput, { target: { value: 'invalid time' } });
        fireEvent.change(playersInput, { target: { value: 'invalid number' } });
        fireEvent.change(laneInput, { target: { value: 'invalid number' } });
    
        expect(dateInput).toHaveValue('');
        expect(timeInput).toHaveValue('');
        expect(playersInput).toHaveValue(null);
        expect(laneInput).toHaveValue(null);
      });
})