import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
	private pageTitle:string;

	constructor() {
		this.pageTitle = "Home Page";
	}
}