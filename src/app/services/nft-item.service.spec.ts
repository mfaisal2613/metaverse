import { TestBed } from '@angular/core/testing';

import { NftItemService } from './nft-item.service';

describe('NftItemService', () => {
  let service: NftItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
