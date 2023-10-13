import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [];
  storageListenSub: Subscription;

  constructor() {

    this.getData();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === 'bookmarks') this.getData();
    })
  }


  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((b) => {
      return b.id === id; // return true

    })
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.saveData();
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark as any, updatedFields);
    this.saveData();

  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return

    this.bookmarks.splice(bookmarkIndex, 1);
    this.saveData();

  }

  saveData() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  getData() {
    const storageData = JSON.parse(localStorage.getItem('bookmarks'));
    if (!storageData) return
    this.bookmarks.length = 0;
    this.bookmarks.push(...storageData)
  }


}
