import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Firebasedbservice } from '../dbservice/firebasedb.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  invited: boolean = false
  alertBox: boolean = false

  constructor(private db: Firebasedbservice) {}

  ngOnInit() {
    const systemId = this.db.getSystemId();
    console.log("System ID:", systemId);
  }

  toggleInvited(){
    this.invited = !this.invited
  }

  GenerateBase(name: string) {
    if (this.isInvalidName(name)) {
      this.shakeButton();
      return;
    }    
    alert("Valid name: " + name);
  }

  showAlertCard() {
    this.alertBox = true;
    setTimeout(() => {
      this.alertBox = false;
    }, 2000); // Duration of the alert box visibility
  }

  shakeButton() {
    this.showAlertCard();
    const buttonelement = document.querySelector('.createBtn') as HTMLElement;
    buttonelement.classList.add('shakeBtn');
    setTimeout(() => {
      buttonelement.classList.remove('shakeBtn');
    }, 500); // Duration of the shake effect
  }

  isInvalidName(name: string): boolean {
    return name.trim().length < 3 || name.trim().length > 20 || !/^[a-zA-Z0-9]+$/.test(name);
  }

}