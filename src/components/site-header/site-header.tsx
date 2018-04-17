import { Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.css',
  shadow: true
})
export class SiteHeader {

  render() {
    return (
      <div>
      	<img src="/assets/imgs/logo.png"></img>
      	<ul>
      		<li>1.0.0-alpha.x</li>
      		<li class="li-hover">Docs</li>
      		<li class="li-hover">GitHub</li>
      	</ul>
      </div>
    );
  }
}


