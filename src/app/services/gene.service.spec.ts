/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneService } from './gene.service';

describe('GeneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneService]
    });
  });

  it('should ...', inject([GeneService], (service: GeneService) => {
    expect(service).toBeTruthy();
  }));
});
