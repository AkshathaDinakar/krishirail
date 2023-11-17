import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent {

  constructor(private router: Router,public sidebarService:SidebarService ) {}

  cryptoData = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 170.46,
      percentChange: 2.35,
      imageUrl: '/assets/svgs/bit1.png',
      img:'/assets/svgs/svg-export/svgexport-51.svg'
    },
    {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      price: 359.93,
      percentChange: 9.94,
      imageUrl: '/assets/svgs/bit2.png',
      img:'/assets/svgs/svg-export/svgexport-51.svg'

    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.2351,
      percentChange: 0.35,
      imageUrl: '/assets/svgs/bit3.png',
      img:'/assets/svgs/svg-export/svgexport-54.svg'

    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: 60.15,
      percentChange: 0.99,
      imageUrl: '/assets/svgs/bit4.png',
      img:'/assets/svgs/svg-export/svgexport-51.svg'

    },
    {
      name: 'Zcash',
      symbol: 'ZEC',
      price: 58.41,
      percentChange: 8.79,
      imageUrl: '/assets/svgs/bit5.png',
      img:'/assets/svgs/svg-export/svgexport-54.svg'

    },
    {
      name: 'Bitcoin Gold',
      symbol: 'BTG',
      price: 12.23,
      percentChange: 4.42,
      imageUrl: '/assets/svgs/bit6.png',
      img:'/assets/svgs/svg-export/svgexport-54.svg'

    },
  ];
  
}
