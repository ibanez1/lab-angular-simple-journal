import { EntryListComponent } from "app/entry-list/entry-list.component";
import { SingleEntryComponent } from "app/single-entry/single-entry.component";
import { Routes } from "@angular/router";


export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'home', component: EntryListComponent},
  { path: ':id', component: SingleEntryComponent}
];