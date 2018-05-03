import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalServiceService {

constructor(private http: Http) { }

getJournal() {
  return this.http.get('http://localhost3000/api/journal-entries')
    .map((res) => res.json());
}

}
