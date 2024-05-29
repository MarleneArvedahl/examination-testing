import './Confirmation.scss';

import Top from '../Top/Top';
import Navigation from '../Navigation/Navigation';
import Input from '../Input/Input';

function Confirmation({ confirmationDetails, setConfirmation }) {
  return (
    <section data-testid="confirmation" className='confirmation'>
      <Navigation setConfirmation={setConfirmation} />
      <Top title='See you soon!' />
      {confirmationDetails?.active ? (
        <form className='confirmation__details'>
          <Input
            label='When'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.when.replace('T', ' ')}
            disabled='disabled'
          />
          <Input
            label='Who'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.people}
            disabled='disabled'
          />
          <Input
            label='Lanes'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.lanes}
            disabled='disabled'
          />
          <Input
            label='Booking number'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.id}
            disabled='disabled'
          />
          <article className='confirmation__price'>
            <p>Total:</p>
            <p data-testid="Price">{confirmationDetails.price} sek</p>
          </article>
          <button
            className='button confirmation__button'
            onClick={(event) => {
              event.preventDefault();
              setConfirmation({});
            }}
          >
            Sweet, let's go!
          </button>
        </form>
      ) : (
        <h2 className='confirmation__no-booking'>Ingen bokning gjord!</h2>
      )}
    </section>
  );
}

export default Confirmation;
