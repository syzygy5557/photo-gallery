import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { IPhoto } from '../photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photo: IPhoto = {
    id: 0,
    thumbnailUrl: '',
    albumId: 0,
    url: '',
    title: '',
  };
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoService
      .getImage(this.route.snapshot.params['id'])
      .subscribe((photo) => {
        this.photo = photo;
      });
  }
}
