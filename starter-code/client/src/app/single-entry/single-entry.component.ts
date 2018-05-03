import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../services/journalService.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entryId: number;
  response:any={}
  constructor(private route: ActivatedRoute, private journalService: JournalServiceService) { }

  ngOnInit() {
    this.route.params 
    .subscribe((params) => {
      this.journalService.getOneJournal(params.id).subscribe(response => {this.response=response; console.log(response)} )
      
      
    });
    
  }

}
