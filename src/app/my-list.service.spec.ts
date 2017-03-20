import { TestBed, inject } from '@angular/core/testing';

import { MyListService } from './my-list.service';

describe('MyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyListService]
    });
  });

  it('should ...', inject([MyListService], (service: MyListService) => {
    expect(service).toBeTruthy();
  }));
});
