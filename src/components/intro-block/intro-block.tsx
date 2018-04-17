import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'intro-block',
  styleUrl: 'intro-block.css',
  shadow: true
})
export class IntroBlock {
  @Prop() title: string;
  @Prop() text: string;
  render() {
    return (
      <div>
        <img src="/assets/imgs/icon.png"></img>
        <p>{ this.title }</p>
        <p id="p2">{ this.text }</p>
      </div>
    );
  }
}

