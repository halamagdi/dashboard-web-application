import { Component } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-managebookmark',
  templateUrl: './managebookmark.component.html',
  styleUrls: ['./managebookmark.component.css']
})
export class ManagebookmarkComponent {

  bookmarks: Bookmark[] = []

  constructor(private _BookmarkService:BookmarkService){}

  ngOnInit() : void {

    this.bookmarks = this._BookmarkService.getBookmarks() ; 
  }

}
