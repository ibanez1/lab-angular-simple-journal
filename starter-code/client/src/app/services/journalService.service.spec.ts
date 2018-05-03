/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JournalServiceService } from './journalService.service';

describe('Service: JournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalServiceService]
    });
  });

  it('should ...', inject([JournalServiceService], (service: JournalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
