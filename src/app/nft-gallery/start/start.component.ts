import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { NFT_ITEM_ARRAY, NFTItem } from '../../constants/constants.nftarray';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { NftItemService } from 'src/app/services/nft-item.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  interestRate: number = 3.15;
  loanMonth: number = 3;
  formattedAmount: string;
  selectedNFTIndex: number = 0;
  searchItem?: NFTItem;
  private cd: ChangeDetectorRef;

  slideConfig = { adaptiveHeight: false };

  NFTArray: NFTItem[] = NFT_ITEM_ARRAY;

  constructor(private nftitemservices: NftItemService) {}

  ngOnInit(): void {}

  getWeeklyAmount() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      (NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value / 4).toFixed(2)
    );
  }

  searchItemChanged(event: any) {
    let index = this.NFTArray.findIndex((t) => t.Id == event);
    if (index != -1) {
      this.slickModal.slickGoTo(index);
    }
  }
  afterSlickChange(event: any) {
    this.nftitemservices.setNFT(event.currentSlide);
    this.selectedNFTIndex = event.currentSlide;
    this.formattedAmount =
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value.toFixed(2);
  }

  slickInit(event: any) {
    event.slick.slickGoTo(this.selectedNFTIndex);
    this.cd.detectChanges();
  }
}
