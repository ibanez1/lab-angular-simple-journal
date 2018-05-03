import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../services/journalService.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  response$:Observable<any>;
  constructor(private journalService: JournalServiceService) {}

  ngOnInit() {
   this.response$ = this.journalService.getJournal()
  }

}
