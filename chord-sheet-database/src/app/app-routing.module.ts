import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ChordSheetListComponent } from './chord-sheet-list/chord-sheet-list.component';

const routes: Routes = [
  { path: '', component: ChordSheetListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  ]
})
export class AppRoutingModule { }
