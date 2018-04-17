import { Component } from '@stencil/core';

@Component({
  tag: 'mock-input',
  styleUrl: 'mock-input.css',
  shadow: true
})
export class MockInput {

  render() {
    return (
      <div>
      	<input placeholder="Email address"></input><button>NOTIFY ME</button>
      </div>
    );
  }
}

