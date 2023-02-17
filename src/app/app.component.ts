import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from './components/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  Amount,
  NFT_ITEM_ARRAY,
  USDtoETH,
  CARD_LIST,
  ACCOUNT_LIST,
  Account,
  Card,
  NFTItem,
  LOAN_MAX_VALUE,
  LOAN_MIN_VALUE,
} from './constants/constants.nftarray';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    super();
  }
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  interestRate: number = 3.15;
  loanMonth: number = 3;
  formattedAmount: string;
  step: number = 1;
  type: string = 'accounts';
  selectedNFTIndex: number = 0;
  searchItem?: NFTItem;
  phoneNumber: string;
  dob: string;
  birthPlace: string;
  phoneNumberDisplay: boolean;
  dobDisplay: boolean;
  birthPlaceDisplay: boolean;

  slideConfig = { adaptiveHeight: false };

  selectedAccountIndex: number = 0;
  selectedCardIndex: number = 0;

  AccountList: Account[] = ACCOUNT_LIST;
  CardList: Card[] = CARD_LIST;
  NFTArray: NFTItem[] = NFT_ITEM_ARRAY;

  verifyAccount() {
    this.next();
    setTimeout(() => {
      this.next();
    }, 2000);
    console.log(this.step);
  }

  changeType(type: string) {
    this.type = type;
  }
  next(step?: number) {
    if (step) {
      this.step = step;
    } else {
      this.step++;
    }
  }
  prev(step?: number) {
    if (step) {
      this.step = step;
    } else {
      this.step--;
    }
  }

  goToStart() {
    this.step = 0;
    this.selectedAccountIndex = 0;
    this.selectedCardIndex = 0;
    this.selectedNFTIndex = 0;
    this.loanMonth = 3;
    this.type = 'accounts';
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

  getWeeklyAmount() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      (NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value / 4).toFixed(2)
    );
  }

  accountChanged(index: number) {
    this.selectedAccountIndex = index;
  }

  searchItemChanged(event: any) {
    let index = this.NFTArray.findIndex((t) => t.Id == event);
    if (index != -1) {
      this.slickModal.slickGoTo(index);
    }
  }

  cardChanged(index: number) {
    this.selectedCardIndex = index;
  }

  getCardNumber(index: number) {
    return this.CardList[index].CardNumber;
  }

  getCardType(index: number) {
    return this.CardList[index].CardType;
  }

  getAccountNumber(index: number) {
    return this.AccountList[index].AccountNumber;
  }

  getAccountNickName(index: number) {
    return this.AccountList[index].NickName;
  }

  getAccountType(index: number) {
    return this.AccountList[index].AccountType;
  }

  afterSlickChange(event: any) {
    this.selectedNFTIndex = event.currentSlide;
    this.formattedAmount =
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value.toFixed(2);
  }

  slickInit(event: any) {
    event.slick.slickGoTo(this.selectedNFTIndex);
    this.cd.detectChanges();
  }

  getDownPayment() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      (this.getLoanAmountValue() / 4).toFixed(2)
    );
  }
  getLoanAmount() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      this.getLoanAmountValue().toFixed(2)
    );
  }

  getLoanAmountValue() {
    return (NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Value / 5) * 4;
  }

  getMonthlyInstallmentAmount() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      (this.getTotalPaymentAmountValue() / this.loanMonth).toFixed(2)
    );
  }

  getTotalPaymentAmountValue() {
    return (
      (this.interestRate / 12 / 10) *
        this.loanMonth *
        this.getLoanAmountValue() +
      this.getLoanAmountValue()
    );
  }

  getTotalPaymentAmount() {
    return (
      NFT_ITEM_ARRAY[this.selectedNFTIndex].Amount.Currency +
      this.getTotalPaymentAmountValue().toFixed(2)
    );
  }

  increaseMonth() {
    if (this.loanMonth != LOAN_MAX_VALUE) {
      this.loanMonth++;
    }
  }

  decreaseMonth() {
    if (this.loanMonth != LOAN_MIN_VALUE) {
      this.loanMonth--;
    }
  }
  getEligiblityCondition() {
    if (this.loanMonth > 5) {
      return false;
    }
    return true;
  }

  updateStatus() {
    if (this.step == 0) {
      this.searchItem = undefined;
      return true;
    }
    return false;
  }
  phoneNumberChanged(event: any) {
    if (event == undefined || event == '') {
      this.phoneNumberDisplay = false;
    } else {
      this.phoneNumberDisplay = true;
    }
  }

  dobChanged(event: any) {
    if (event == undefined || event == '') {
      this.dobDisplay = false;
    } else {
      this.dobDisplay = true;
    }
  }
  birthPlaceChanged(event: any) {
    if (event == undefined || event == '') {
      this.birthPlaceDisplay = false;
    } else {
      this.birthPlaceDisplay = true;
    }
  }
}
