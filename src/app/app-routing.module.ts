import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './file/file.component';
import { TableListProfessionistaComponent } from './table-list-professionista/table-list-professionista.component';

const routes: Routes = [
  { path: '', component: FileComponent },
  { path: 'tableListProfessionista', component: TableListProfessionistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
