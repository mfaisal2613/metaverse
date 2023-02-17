import { Component, OnInit } from '@angular/core';
import {
  Amount,
  NFT_ITEM_ARRAY,
  USDtoETH,
  NFTItem,
} from '../constants/constants.nftarray';
import { NftItemService } from '../services/nft-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedNFTIndex: number = 0;
  NFTArray: NFTItem[] = NFT_ITEM_ARRAY;
  searchItem?: NFTItem;

  constructor(private nftitemservices: NftItemService) {}

  ngOnInit(): void {
    this.nftitemservices.selectedNFT$.subscribe((value) => {
      this.selectedNFTIndex = value;
    });
  }

  getAmount() {
    return this.amountFormatter(NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount);
  }

  amountFormatter(amount: Amount) {
    return amount.Currency + amount.Value.toFixed(2);
  }

  getETHValue() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value * USDtoETH
    ).toFixed(5);
  }

  getID() {
    return NFT_ITEM_ARRAY[this.selectedNFTIndex].Id;
  }

  searchItemChanged(event: any) {
    let index = this.NFTArray.findIndex((t) => t.Id == event);
  }
}
