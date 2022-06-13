import { Pipe, PipeTransform } from '@angular/core';
import { IPhoto } from '../photos/photo';

@Pipe({
  name: 'filterAlbum',
})
export class FilterAlbumPipe implements PipeTransform {
  transform(items: IPhoto[], albumId: number): any {
    return items.filter((item) => {
      return item.albumId === albumId;
    });
  }
}
