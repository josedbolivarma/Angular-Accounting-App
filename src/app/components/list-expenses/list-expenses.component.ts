import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/lists.model';
import { AccountListService } from 'src/app/services/account-lists.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  lists: Lists = [];

  constructor(
    private accountListsService: AccountListService
  ) { }

  ngOnInit(): void {
    this.lists = this.accountListsService.listsExpenses;
  }

}
