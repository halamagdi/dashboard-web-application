import { Component } from '@angular/core';
import { BookmarkService } from '../shared/bookmark.service';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {

  bookmarks: Bookmark[] = [];
  iconOrigin: string = '/favicon.ico';

  constructor(private _BookmarkService: BookmarkService) { }

  ngOnInit() {

    this.bookmarks = this._BookmarkService.getBookmarks();

  }

}
