import { Component } from '@angular/core';
import { BookmarkService } from '../shared/bookmark.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Bookmark } from '../shared/bookmark.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.css']
})
export class AddbookmarkComponent {



  constructor(private _BookmarkService: BookmarkService, private _Router: Router, private _NotificationService: NotificationService) { }

  ngOnInit(): void {

  }

  addBookmarkSubmit(form: NgForm) {
    const { name, url } = form.value;
    const bookmark = new Bookmark(name, url);
    console.log(bookmark);
    this._BookmarkService.addBookmark(bookmark);
    this._Router.navigateByUrl('/bookmarks');
    this._NotificationService.show('Bookmark Added !');

  }


}
