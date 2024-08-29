import { Component, OnInit } from '@angular/core';
import { CompaniesListService } from '../../core/services/companies-list-service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss'
})
export class CompaniesListComponent implements OnInit{
  companiesList: any;
  displayedColumns: string[] = ['name', 'business', 'valuation', 'active', 'action'];
  pageSize: number = 0;

  constructor(
    private companiesListService: CompaniesListService
  ){

  }

  ngOnInit(){
    this.companiesListService.getCompaniesList().subscribe(
      response => {
        this.companiesList = response;
        this.pageSize = this.companiesList.length;
      },
      error => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}