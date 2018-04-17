import { Component } from '@stencil/core';

@Component({
  tag: 'site-footer',
  styleUrl: 'site-footer.css',
  shadow: true
})
export class SiteFooter {

  render() {
    return (
      <div>
        <span>
          <img class="img1" src="/assets/imgs/ionic2.png"></img>
          <p>Released under MIT License | Copyright @ 2017 Drifty Co.</p>
        </span>
        <img class="img2" src="/assets/imgs/share.png"></img>
      </div>
    );
  }
}

