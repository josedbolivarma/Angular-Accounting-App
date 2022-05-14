import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/lists.model';
import { AccountListService } from 'src/app/services/account-lists.service';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css']
})
export class ListIncomeComponent implements OnInit {

  constructor(
    private accountListService: AccountListService
  ) { }
  lists: Lists = [];

  ngOnInit(): void {
    this.lists = this.accountListService.listsIncome;
  }

}
