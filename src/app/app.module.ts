import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import {PhotoService} from './photos/photo.service';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { FilterAlbumPipe } from './pipes/filter-album.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotoDetailsComponent,
    FilterAlbumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, PhotoService, FilterAlbumPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
