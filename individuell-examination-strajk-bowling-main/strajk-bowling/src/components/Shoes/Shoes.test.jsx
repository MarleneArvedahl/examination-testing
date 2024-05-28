import { render, screen, fireEvent } from '@testing-library/react';

import Shoes from './Shoes';

describe ('Shoes',() => {
    it('shows an add show button and zero inputs initially', () => {
        render(<Shoes shoes={[]} />);
        
        // queryByTestId?
        const sizeInput = screen.queryByRole('input');
    
        expect(sizeInput).toHaveValue(null);


        const addButton = screen.getByText('+');
        const removeButton = screen.getByText('-');
    
    fireEvent.click(addButton);
    expect(screen.getByLabelText('person 1')).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(screen.queryByLabelText('person 1')).not.toBeInTheDocument();
  });

    
      });

