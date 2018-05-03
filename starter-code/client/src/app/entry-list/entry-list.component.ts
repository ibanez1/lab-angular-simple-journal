import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../services/journalService.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  response:any;
  constructor(private journalService: JournalServiceService) {}

  ngOnInit() {
   this.journalService.getJournal().subscribe(respuesta => {
     return this.response = respuesta
   })
  }

}
