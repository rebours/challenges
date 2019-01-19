import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ConsentsServices} from "../../services/consents";

export interface clientInformation {
  name: string;
  email: string;
  consents: string;
}

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})


export class ConsentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'consents'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private consentService : ConsentsServices) {
    this.dataSource.data  = this.consentService.getAllConsent();
// //    simulation call API
//     this.consentService.getData()
//       .subscribe(res => {
//         this.dataSource.data = res;
//       })
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // add an id on the "next page" for the test 2e2
    document.querySelector('.mat-paginator-navigation-next').setAttribute('id', 'nextPaginator')
  }

}
