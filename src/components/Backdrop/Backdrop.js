import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  // const cssClasses = [
  //   'Backdrop',
  //   props.show ? 'BackdropOpen' : 'BackdropClosed',
  // ];
  const cssClasses = ['Backdrop'];

  return (
    <div className={cssClasses.join(' ')} onClick={props.onCloseModal}></div>
  );
};

export default backdrop;
