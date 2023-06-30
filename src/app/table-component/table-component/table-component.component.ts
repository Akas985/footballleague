


import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],

})
export class TableComponentComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'team', 'gp', 'lose', 'win', 'draw'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);


  }


  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  team: string;
  position: number;
  gp: number;
  win: string;
  lose: string;
  draw: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, team: ' New Zealand', gp: 1, lose: '3', draw: '2', win: '2' },
  { position: 2, team: ' Norway', gp: 4, lose: '3', draw: '2', win: '4' },
  { position: 3, team: ' Philippines', gp: 6, lose: '3', draw: '2', win: '2' },
  { position: 4, team: 'Switzerland', gp: 9, lose: '3', draw: '2', win: '2' },
  { position: 5, team: ' Australia', gp: 10, lose: '3', draw: '2', win: '1' },
  { position: 6, team: ' Canada', gp: 127, lose: '3', draw: '2', win: '2' },
  { position: 7, team: ' Nigeria', gp: 14, lose: '3', draw: '2', win: '3' },
  { position: 8, team: 'Rep of Ireland', gp: 15, lose: '3', draw: '2', win: '3' },
  { position: 9, team: 'Costa Rica', gp: 18, lose: '3', draw: '2', win: '4' },
  { position: 10, team: 'Japan', gp: 20, lose: '3', draw: '2', win: '5' },
  { position: 11, team: ' Spain', gp: 22, lose: '3', draw: '2', win: '6' },
  { position: 12, team: 'Zambia', gp: 24, lose: '3', draw: '2', win: '3' },
  { position: 13, team: ' China PR', gp: 26, lose: '3', draw: '2', win: '2' },
  { position: 14, team: 'Denmark', gp: 28, lose: '3', draw: '2', win: '5' },
  { position: 15, team: 'Argentina', gp: 30, lose: '3', draw: '2', win: '6' },
  { position: 16, team: 'England', gp: 32, lose: '3', draw: '2', win: '6' },
  { position: 17, team: 'The Netherlands', gp: 35, lose: '3', draw: '2', win: '4' },
  { position: 18, team: 'Portugal', gp: 39, lose: '3', draw: '2', win: '5' },
  { position: 19, team: ' USA', gp: 39, lose: '3', draw: '2', win: '4' },
  { position: 20, team: ' Italy', gp: 40, lose: '3', draw: '2', win: '5' },
];

