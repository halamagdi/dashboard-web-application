import { Injectable } from '@angular/core';
import { Notes } from './notes.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Notes[] = [];
  storageListenSub: Subscription;

  constructor() {
    this.getData();

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: StorageEvent) => {
        if (event.key === 'notes') this.getData()
      })
  }

  getNotes() {
    return this.notes;
    // return this.getData();
  }

  getNote(id: string) {
    return this.notes.find((n) => {
      return n.id === id; // return true

    })
  }

  addNote(note: Notes) {
    this.notes.push(note);
    this.saveData();
  }

  updateNote(id: string, updatedFields: Partial<Notes>) {
    const note = this.getNote(id);
    Object.assign(note as any, updatedFields);
    this.saveData();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(n => n.id === id)
    if (noteIndex == -1) return

    this.notes.splice(noteIndex, 1);
    this.saveData();

  }

  saveData() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  getData() {
    const storageData = JSON.parse(localStorage.getItem('notes'));
    if (!storageData) return
    this.notes.length = 0;
    this.notes.push(...storageData)
  }

}
