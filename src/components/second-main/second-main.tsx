import { Component } from '@stencil/core';

@Component({
  tag: 'second-main',
  styleUrl: 'second-main.css',
  shadow: true
})
export class SecondMain {
	todos = [{
		title: 'Cross Platform',
		text: 'Build web apps that run equally well on iOS, Android, Electron, and as Progressive Web Apps'
	},{
		title: 'Native Access',
		text: 'Access the full Native SDK on each platform, and easily deploy to App Stores (and the web!)'
	},{
		title: 'Open Source',
		text: 'Capacitor is completely open source (MIT) and maintained by Ionic and its community.'
	},{
		title: 'Web Native',
		text: 'Build apps with standardized web technologies that will work for decades, and easily reach users on the app stores and the mobile web.'
	},{
		title: 'Extensible',
		text: 'Easily add custom native functionality with a simple Plugin API, or use existing Cordova plugins with our compatibility layer.'
	},{
		title: 'Simple',
		text: 'Focus on what you want to do, not how. Capacitor turns complex, proprietary Native APIs into simple JS calls.'
	}];
	render() {
	  return (
	    <main>
	    	{this.todos.map((todo) => 
        		<intro-block title={todo.title} text={todo.text}></intro-block>
      		)}
	    </main>
	  );
	}
}

