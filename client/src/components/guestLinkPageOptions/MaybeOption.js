//External dependencies
import { useState } from 'react';
import { Alert } from 'bootstrap';

//Internal dependencies
import {
  putSuggestionMsg,
  putSuggestionBoxCounter,
} from '../../utils/apis/wannagoApiServices/putWannaGos';

import './MaybeOption.css';

const MaybeOption = ({ id, suggestionBoxCounter, ownerName }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    try {
      await putSuggestionMsg(msg, id);
      await putSuggestionBoxCounter(id, ++suggestionBoxCounter);
      console.log(suggestionBoxCounter);
      setMsgSent(!msgSent);
    } catch (e) {
      setError('Sorry, something went wrong and we could not send the message. Please try again')
      console.log(
        `Error in MaybeOption.js, trying to send the suggestion to backend to put in db. ${e}`
      );
    }
    e.target.suggestion.value = '';
  };

  return (
    <>
      <h3>
        Let {ownerName} know if you have any suggestion. Remember to say who you
        are.
      </h3>
      {error && <Alert variant='danger'>{error}</Alert>}
      {msgSent ? (
        <h3 className='textGuestLink'>We'll let {ownerName} know</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='maybeTextArea'>
            <textarea
              name='suggestion'
              placeholder='write your suggestion here'
              autoFocus
              required
            ></textarea>
            <button
              className='button maybe'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default MaybeOption;




