import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notes } from '../shared/notes.model';
import { NotesService } from '../shared/notes.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent {

  showError: boolean | any;

  constructor(private _NotesService: NotesService, private _Router: Router , private _NotificationService:NotificationService) { }

  ngOnInit(): void {

  }

  addNoteSubmit(form: NgForm) {
    const { title, content } = form.value;
    if (form.invalid) return this.showError = true
    const note = new Notes(title, content);
    console.log(note);
    this._NotesService.addNote(note);
    this._Router.navigateByUrl('/notes') ;
    this._NotificationService.show('Note Added !') ; 

  }

}
