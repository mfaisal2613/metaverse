import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NftGalleryRoutingModule } from './nft-gallery-routing.module';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NftGalleryRoutingModule,
    FormsModule,
  ],
})
export class NftGalleryModule {}
