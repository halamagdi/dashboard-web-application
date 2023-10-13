import { Component, OnInit } from '@angular/core';
import { Notes } from '../shared/notes.model';
import { NotesService } from '../shared/notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: Notes[] = [];

  constructor(private _NotesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this._NotesService.getNotes() ; 

  }

}
