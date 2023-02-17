import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NftItemService {
  constructor() {}
  private nftItem$ = new BehaviorSubject<any>({});
  selectedNFT$ = this.nftItem$.asObservable();

  setNFT(nft: any) {
    this.nftItem$.next(nft);
  }
}
