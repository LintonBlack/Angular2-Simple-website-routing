import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})
export class AboutComponent {
	private pageTitle:string;

	constructor() {
		this.pageTitle = "About Page";
	}
}