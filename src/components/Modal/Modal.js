import React from 'react';
// import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const modal = props => {
  // ANIMATION TIMINGS
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
      }}
    >
      {/* The classes it cycles through are trunk */}
      {/* fade-slide-enter
          fade-slide-enter-active
          fade-slide-exit
          fade-slide-exit-active
      */}
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
