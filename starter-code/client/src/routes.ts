import { EntryListComponent } from "app/entry-list/entry-list.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'api/journal-entries', component: EntryListComponent,}
];