import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {
  passwordLength = 12;
  includeSpecialChars = true;
  includeMixedCase = true;
  generatedPassword = '';

  constructor() {}

  ngOnInit(): void {}

  copyToClipboard() {
    const passwordElement = document.querySelector('.password-display') as HTMLInputElement;
    if (passwordElement && passwordElement.textContent) {
      const textArea = document.createElement('textarea');
      textArea.value = passwordElement.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
  

  generatePassword(): void {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let charSet = lowerCaseChars + numbers;

    if (this.includeMixedCase) {
      charSet += upperCaseChars;
    }

    if (this.includeSpecialChars) {
      charSet += specialChars;
    }

    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    this.generatedPassword = password;
  }




  
}
