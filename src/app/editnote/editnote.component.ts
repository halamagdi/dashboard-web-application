import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotesService } from '../shared/notes.service';
import { Notes } from '../shared/notes.model';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {

  idParam: any;
  notes: Notes;

  constructor(private _ActivatedRoute: ActivatedRoute, private _NotesService: NotesService, private _Router: Router, private _NotificationService: NotificationService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.idParam = paramMap.get('id');
      this.notes = this._NotesService.getNote(this.idParam);
    })

  }

  editForm(form: NgForm) {
    this._NotesService.updateNote(this.notes.id, form.value);
    this._Router.navigateByUrl('/notes');
    this._NotificationService.show('Note Updated !');

  }

  deleteNote() {
    this._NotesService.deleteNote(this.notes.id);
    this._Router.navigateByUrl('/notes');
    this._NotificationService.show('Note Deleted !');


  }
}
