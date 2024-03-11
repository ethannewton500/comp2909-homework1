import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  additionA = '';
  additionB = '';
  sum  = 0;
  displaySum = '';

  subtractionA = '';
  subtractionB = '';
  difference = 0;
  displayDifference = '';

  multiplicationA = '';
  multiplicationB = '';
  product = 0;
  displayProduct = '';

  divisionA = '';
  divisionB = '';
  quotient = 0;
  displayQuotient = '';

  doAddition(a: any, b: any) {
    this.sum = Number(a) + Number(b);
    this.displaySum = Math.round(Number(a) * 100) / 100  + " + " + Math.round(Number(b) * 100) / 100 + " = " + Math.round(this.sum * 100) / 100;
    this.displayDifference = '';
    this.displayProduct = '';
    this.displayQuotient = '';
    this.clearInputs();
  }
  doSubtraction(a: any, b: any) {
    this.difference = Number(a) - Number(b);
    this.displayDifference = Math.round(Number(a) * 100) / 100 + " - " + Math.round(Number(b) * 100) / 100 + " = " + Math.round(this.difference * 100) / 100;
    this.displaySum = '';
    this.displayProduct = '';
    this.displayQuotient = '';
    this.clearInputs();
  }

  doMultiplication(a: any, b: any) {
    this.product = Number(a) * Number(b);
    this.displayProduct = Math.round(Number(a) * 100) / 100 + " * " + Math.round(Number(b) * 100) / 100 + " = " + Math.round(this.product * 100) / 100;
    this.displaySum = '';
    this.displayDifference = '';
    this.displayQuotient = '';
    this.clearInputs();
  }

  doDivision(a: any, b: any) {
    this.quotient = Number(a) / Number(b);
    this.displayQuotient = Math.round(Number(a) * 100) / 100 + " / " + Math.round(Number(b) * 100) / 100 + " = " + Math.round(this.quotient * 100) / 100;
    this.displaySum = '';
    this.displayDifference = '';
    this.displayProduct = '';
    this.clearInputs();
  }
  clearInputs() {
    this.additionA = '';
    this.additionB = '';
    this.subtractionA = '';
    this.subtractionB = '';
    this.multiplicationA = '';
    this.multiplicationB = '';
    this.divisionA = '';
    this.divisionB = '';
  }
}
