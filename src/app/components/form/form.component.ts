import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/lists.model';
import { AccountListService } from 'src/app/services/account-lists.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private accountListService: AccountListService
  ) { }
  
  selectValue: string = 'ing';
  description: string = '';
  value: number = 0;

  ngOnInit(): void {
  }

  selectChange(event: any){
    console.log(event.target.value, 'SELECT CHANGE');
    const option = event.target.value;
    this.selectValue = option;
  }

  addToList() {
    console.log(this.selectValue);
    const obj: List = {
      name: this.description,
      ammount: this.value
    }
    if( this.selectValue === 'ing') {
      this.accountListService.addToListIncome(obj)
    } else {
      this.accountListService.addToListExpenses(obj)
    }
  }

  handleSubmit(event: any) {
    event.preventDefault();
    this.addToList();
  }


}
