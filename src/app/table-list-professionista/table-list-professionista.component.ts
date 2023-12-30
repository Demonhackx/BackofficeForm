import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  position: number;
  cognome: string;
  dataDiNascita: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Matteo', cognome: 'Rossi', dataDiNascita: '02/01/1992'},
  {position: 2, nome: 'Valerio', cognome: 'Neri', dataDiNascita: '20/12/1993'},
  {position: 3, nome: 'Giulia', cognome: 'Verdi', dataDiNascita: '05/03/1990'},
  {position: 4, nome: 'Alessia', cognome: 'Rosa', dataDiNascita: '15/06/1988'},
  {position: 5, nome: 'James', cognome: 'Ring', dataDiNascita: '12/10/1992'},
  {position: 6, nome: 'Andrea', cognome: 'Neri', dataDiNascita: '22/01/1990'},
  {position: 7, nome: 'Giovanna', cognome: 'Grigio', dataDiNascita: '15/03/1992'},
  {position: 8, nome: 'Francesca', cognome: 'Argento', dataDiNascita: '12/01/1986'},
  {position: 9, nome: 'Laura', cognome: 'Bianchi', dataDiNascita: '18/02/1993'},
  {position: 10, nome: 'Chiara', cognome: 'Arancio', dataDiNascita: '07/06/1995'},
];

@Component({
  selector: 'app-table-list-professionista',
  templateUrl: './table-list-professionista.component.html',
  styleUrls: ['./table-list-professionista.component.css']
})

export class TableListProfessionistaComponent {
  displayedColumns: string[] = ['position', 'nome', 'cognome', 'dataDiNascita'];
  dataSource = ELEMENT_DATA;
}
