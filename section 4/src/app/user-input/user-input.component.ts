import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment-result/investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5.5);
  duration = signal(10);

  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}
