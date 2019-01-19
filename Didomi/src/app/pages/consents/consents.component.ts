import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ConsentsServices} from "../../services/consents";


@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})


export class ConsentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'consents'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private consentService: ConsentsServices) {

    // fake call api
    this.dataSource.data = this.consentService.getAllConsent();

    // real call api
    // this.consentService.getAllConsent()
    //   .subscribe((res) => {
    //       this.dataSource.data = res
    //     },
    //     (error) => {
    //       console.log('get all consent error ', error)
    //     })
  }

  ngOnInit() {
    // link the paginator to the table
    this.dataSource.paginator = this.paginator;

    // add an id on the "next page" for the test 2e2
    document.querySelector('.mat-paginator-navigation-next').setAttribute('id', 'nextPaginator')
  }

}
