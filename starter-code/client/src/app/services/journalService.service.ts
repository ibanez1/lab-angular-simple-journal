import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalServiceService {

constructor(private http: Http) { }

getJournal() {
  return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res) => res.json());
}

getOneJournal(id) {
  return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
  .map((res) => res.json());
}

saveComment(title,content){
  return this.http.post('http://localhost:3000/api/journal-entries',{title,content})
  .map((res) => res.json());
}


}
