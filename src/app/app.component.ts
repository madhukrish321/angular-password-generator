import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength: number;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  generatedPassword = '';

  onChangeLength(value: string) {
    this.passwordLength = parseInt(value);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  shouldDisableBtn() {
    return !(
      this.passwordLength >= 7 &&
      this.passwordLength <= 15 &&
      ((this.includeLetters && this.includeNumbers) ||
        (this.includeNumbers && this.includeSymbols) ||
        (this.includeLetters && this.includeSymbols))
    );
  }

  onButtonClick() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
    this.generatedPassword = password;
  }
}
