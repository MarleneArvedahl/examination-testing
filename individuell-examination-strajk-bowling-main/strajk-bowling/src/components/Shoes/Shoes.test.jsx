import { render, screen, fireEvent } from '@testing-library/react';

import Shoes from './Shoes';

describe ('Shoes',() => {
    it('shows an add show button and zero inputs initially', () => {
        render(<Shoes shoes={[]} />);
        
        // queryByTestId?
        const sizeInput = screen.queryByRole('input');
    
        expect(sizeInput).toHaveValue(null);
    
      });

})