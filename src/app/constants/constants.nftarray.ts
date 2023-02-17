export const USDtoETH: number = 0.0006119;
export const LOAN_MAX_VALUE: number = 12;
export const LOAN_MIN_VALUE: number = 3;

export interface NFTItem {
  Id: string;
  ImagePath: string;
  Amount: Amount;
}

export interface Amount {
  Currency: string;
  Value: number;
}

export interface Account {
  AccountNumber: string;
  NickName: string;
  AccountType: string;
}

export interface Card {
  CardNumber: string;
  CardType: string;
}

export const NFT_ITEM_ARRAY: NFTItem[] = [
  {
    Id: 'ABSTRACT #WG01',
    ImagePath: '/assets/img/gallery/image-7.png',
    Amount: {
      Currency: '$',
      Value: 100,
    },
  },
  {
    Id: 'ABSTRACT #WG02',
    ImagePath: '/assets/img/gallery/image-6.png',
    Amount: {
      Currency: '$',
      Value: 140,
    },
  },
  {
    Id: 'ABSTRACT #WG03',
    ImagePath: '/assets/img/gallery/image-9.png',
    Amount: {
      Currency: '$',
      Value: 130,
    },
  },
  {
    Id: 'ABSTRACT #WG04',
    ImagePath: '/assets/img/gallery/image-8.png',
    Amount: {
      Currency: '$',
      Value: 227,
    },
  },
  {
    Id: 'ABSTRACT #WG05',
    ImagePath: '/assets/img/gallery/image-14.png',
    Amount: {
      Currency: '$',
      Value: 298,
    },
  },
  {
    Id: 'ABSTRACT #WG06',
    ImagePath: '/assets/img/gallery/image-15.png',
    Amount: {
      Currency: '$',
      Value: 179,
    },
  },
  {
    Id: 'ABSTRACT #WG07',
    ImagePath: '/assets/img/gallery/image-16.png',
    Amount: {
      Currency: '$',
      Value: 304,
    },
  },
  {
    Id: 'ABSTRACT #WG08',
    ImagePath: '/assets/img/gallery/image-17.png',
    Amount: {
      Currency: '$',
      Value: 241,
    },
  },
  {
    Id: 'ABSTRACT #WG09',
    ImagePath: '/assets/img/gallery/image-18.png',
    Amount: {
      Currency: '$',
      Value: 133,
    },
  },
  {
    Id: 'ABSTRACT #WG10',
    ImagePath: '/assets/img/gallery/image-19.png',
    Amount: {
      Currency: '$',
      Value: 311,
    },
  },
  {
    Id: 'ABSTRACT #WG11',
    ImagePath: '/assets/img/gallery/image-4.png',
    Amount: {
      Currency: '$',
      Value: 325,
    },
  },
  {
    Id: 'ABSTRACT #WG12',
    ImagePath: '/assets/img/gallery/image-26.png',
    Amount: {
      Currency: '$',
      Value: 392,
    },
  },
  {
    Id: 'ABSTRACT #WG13',
    ImagePath: '/assets/img/gallery/image-30.png',
    Amount: {
      Currency: '$',
      Value: 205,
    },
  },
  {
    Id: 'ABSTRACT #WG14',
    ImagePath: '/assets/img/gallery/image-31.png',
    Amount: {
      Currency: '$',
      Value: 387,
    },
  },
  {
    Id: 'ABSTRACT #WG15',
    ImagePath: '/assets/img/gallery/image-32.png',
    Amount: {
      Currency: '$',
      Value: 429,
    },
  },
  {
    Id: 'ABSTRACT #WG16',
    ImagePath: '/assets/img/gallery/image-33.png',
    Amount: {
      Currency: '$',
      Value: 173,
    },
  },
  {
    Id: 'ABSTRACT #WG17',
    ImagePath: '/assets/img/gallery/image-34.png',
    Amount: {
      Currency: '$',
      Value: 376,
    },
  },
  {
    Id: 'ABSTRACT #WG18',
    ImagePath: '/assets/img/gallery/image-35.png',
    Amount: {
      Currency: '$',
      Value: 248,
    },
  },
  {
    Id: 'ABSTRACT #WG19',
    ImagePath: '/assets/img/gallery/image-36.png',
    Amount: {
      Currency: '$',
      Value: 417,
    },
  },
  {
    Id: 'ABSTRACT #WG20',
    ImagePath: '/assets/img/gallery/image-37.png',
    Amount: {
      Currency: '$',
      Value: 334,
    },
  },
  {
    Id: 'ABSTRACT #WG21',
    ImagePath: '/assets/img/gallery/image-3.png',
    Amount: {
      Currency: '$',
      Value: 465,
    },
  },
  {
    Id: 'ABSTRACT #WG22',
    ImagePath: '/assets/img/gallery/image-39.png',
    Amount: {
      Currency: '$',
      Value: 211,
    },
  },
  {
    Id: 'ABSTRACT #WG23',
    ImagePath: '/assets/img/gallery/image-40.png',
    Amount: {
      Currency: '$',
      Value: 130,
    },
  },
  {
    Id: 'ABSTRACT #WG24',
    ImagePath: '/assets/img/gallery/image-41.png',
    Amount: {
      Currency: '$',
      Value: 180,
    },
  },
  {
    Id: 'ABSTRACT #WG25',
    ImagePath: '/assets/img/gallery/image-42.png',
    Amount: {
      Currency: '$',
      Value: 172,
    },
  },
  {
    Id: 'ABSTRACT #WG26',
    ImagePath: '/assets/img/gallery/image-5.png',
    Amount: {
      Currency: '$',
      Value: 140,
    },
  },
];

export const CARD_LIST: Card[] = [
  {
    CardNumber: '**** **** **** 5313',
    CardType: 'Master Card',
  },
  {
    CardNumber: '**** **** **** 3791',
    CardType: 'Visa',
  },
  {
    CardNumber: '**** **** **** 4573',
    CardType: 'Visa',
  },
  {
    CardNumber: '**** **** **** 9874',
    CardType: 'Master Card',
  },
];

export const ACCOUNT_LIST: Account[] = [
  {
    AccountNumber: '78324691',
    NickName: 'Primary Account',
    AccountType: 'Current Account',
  },
  {
    AccountNumber: '92628612',
    NickName: 'Secondary Account',
    AccountType: 'Current Account',
  },
  {
    AccountNumber: '86927496',
    NickName: 'Salary Account',
    AccountType: 'Current Account',
  },
  {
    AccountNumber: '45698073',
    NickName: 'Family Account',
    AccountType: 'Current Account',
  },
];
