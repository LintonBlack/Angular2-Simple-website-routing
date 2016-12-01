import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
	private pageTitle:string;

	constructor() {
		this.pageTitle = "Contact Page";
	}
}