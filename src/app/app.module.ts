import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NftGalleryModule } from './nft-gallery/nft-gallery.module';
import { MenuComponent } from './components/menu.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NftGalleryModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
