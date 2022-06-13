import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'photo-list'
        , pathMatch: 'full'
      },
      { path: 'photo-list', component: PhotosListComponent },
      { path: 'photo-details/:id', component: PhotoDetailsComponent }
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
