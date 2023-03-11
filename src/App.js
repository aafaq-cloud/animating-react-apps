import React, { Component } from 'react';
// import Transition from 'react-transition-group/Transition';

import { Transition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Fade from './components/UI/Fade';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <Fade inProp={this.state.showBlock} />

        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <br />
        {/* Now we use this transition component to wrap what we want to animate, in our case that's this div here. */}
        {/* {this.state.showBlock ? (
          <div
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
            }}
          ></div>
        ) : null} */}
        {/* in={inProp} This decides whether the elements wrapped inside the transition component should be shown or not. */}
        {/* timeout it simply determines how long it takes to switch from entering to entered and from exiting to exited and it's this in-between thing you can then animate and that will be interpreted as milliseconds. */}
        {/* We can add mount on enter which simply is a boolean prop which says yeah if the in prop is set to true you should add the wrap element to the dom and on the other end, you can add unmount on exit to really remove it from the dom if that's not true.  */}
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.showBlock}
          timeout={1000}
        >
          {/* {state => <p>{state}</p>} */}
          {/* <p>{this.state.showBlock}</p> */}
          {/* This arrow function should then of course return the jsx we actually want to render */}
          {/* Now we know that state is entering, entered, exiting or exited, we can of course take advantage of this to now manipulate our style depending on the state. */}
          {state => (
            <div>
              <p>State</p>
              <p>{state}</p>
              <div
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  height: 100,
                  margin: 'auto',
                  transition: 'opacity 1s ease-out',
                  opacity: state === 'exiting' ? 0 : 1,
                }}
              ></div>
            </div>
          )}
        </Transition>
        {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : null}
        {this.state.modalIsOpen ? (
          <Backdrop
            show={this.state.modalIsOpen}
            onCloseModal={this.closeModal}
          />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
