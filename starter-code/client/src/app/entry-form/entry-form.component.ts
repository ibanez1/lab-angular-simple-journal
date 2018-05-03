import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../services/journalService.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  entry:object={};
  comments:Array<object>;
  constructor(
    private route: ActivatedRoute, 
    private journalService: JournalServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  postComment(myForm){
    console.log(myForm.value)
    this.journalService.saveComment(myForm.value.title, myForm.value.content).subscribe(() => {
      //this.router.navigate(["home"])
      location.reload()
    })
  }
}
