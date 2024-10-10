import { TestBed } from '@angular/core/testing';

import { UserclinicService } from './userclinic.service';

describe('UserclinicService', () => {
  let service: UserclinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserclinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
