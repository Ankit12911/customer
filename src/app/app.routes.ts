import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },

  { path: 'table', component: TableComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
];
