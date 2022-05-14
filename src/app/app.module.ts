import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListIncomeComponent } from './components/list-income/list-income.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AccountListService } from './services/account-lists.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListIncomeComponent,
    ListExpensesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
