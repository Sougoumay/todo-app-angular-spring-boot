import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataServiceService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
