import { Component } from '@angular/core';
import { BookmarkService } from '../shared/bookmark.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-editbookmark',
  templateUrl: './editbookmark.component.html',
  styleUrls: ['./editbookmark.component.css']
})
export class EditbookmarkComponent {

  idParam: any;
  bookmark: Bookmark;


  constructor(private _BookmarkService: BookmarkService, private _Router: Router, private _ActivatedRoute: ActivatedRoute,
    private _NotificationService: NotificationService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idParam = paramMap.get('id');
      this.bookmark = this._BookmarkService.getBookmark(this.idParam);


    })

  }

  updateBookmark(form: NgForm) {
    const { name, url } = form.value;
    this._BookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url)
    });
    this._NotificationService.show('Bookmark Updated !') ; 
    // this._Router.navigateByUrl('/bookmarks');
  }

  deleteBookmark() {
    this._BookmarkService.deleteBookmark(this.bookmark.id);
    this._Router.navigate(['../'], { relativeTo: this._ActivatedRoute });
    this._NotificationService.show('Bookmark Deleted !') ; 

  }



}
