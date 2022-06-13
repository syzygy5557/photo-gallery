import { Component, OnInit } from '@angular/core';
import { Observable, catchError, EMPTY, distinct, map, filter } from 'rxjs';
import { IPhoto } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent implements OnInit {
  filterBy = 1;
  albums: Array<number> = [];
  errorMsg = '';
  photos$ = this.photoService.photos$.pipe(
    catchError((err) => {
      this.errorMsg = err;
      return EMPTY;
    })
  );

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photos$.subscribe((photos) => {
      let photoArray = photos;
      let albumIds = photos.map((items) => items.albumId);
      this.albums = albumIds.filter((v, i) => {
        return albumIds.indexOf(v) == i;
      });
      console.log(this.albums);
    });
  }
  changeAlbum(event:any) {
    this.filterBy = parseInt((event.target as HTMLTextAreaElement).value);
  }
}
