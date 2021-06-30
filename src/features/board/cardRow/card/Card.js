import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectVisibleIDs, flipCard, selectMatchedIDs} from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  const dispatch = useDispatch();

  const visibileIDs = useSelector(selectVisibleIDs);
  const matchedIDs= useSelector(selectMatchedIDs);

  const flipHandler = (id) => {
    dispatch(flipCard(id));
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  if (visibileIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  if (matchedIDs.includes(id)) {
    console.log('match')
    cardStyle = 'matched';
  }

  if (visibileIDs.length == 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
