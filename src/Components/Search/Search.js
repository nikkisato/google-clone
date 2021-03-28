import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();
  const search = e => {
    e.preventDefault();
    console.log('YOU HIT THE BUTTON', input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' variant='outlined' onClick={search}>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            variant='outlined'
            onClick={search}
            value={input}
            onChange={e => setInput(e.target.value)}
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
