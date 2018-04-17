import { Component } from '@stencil/core';

@Component({
  tag: 'first-main',
  styleUrl: 'first-main.css',
  shadow: true
})
export class MockInput {
	  render() {
	    return (
	      	<main id="container">
				<h1>Build cross platform mobile apps with</h1>
				<h1>JavaScript and the Web</h1>
				<p class="desc">Native Progressive Web Apps with HTML, CSS, and JavaScript</p>

				<p>Coming early 2018. Sign up below for updates</p>

				<mock-input></mock-input>
			</main>
	    );
	  }
}


