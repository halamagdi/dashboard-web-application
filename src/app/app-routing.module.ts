import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { AddbookmarkComponent } from './addbookmark/addbookmark.component';
import { ManagebookmarkComponent } from './managebookmark/managebookmark.component';
import { EditbookmarkComponent } from './editbookmark/editbookmark.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { animation: 'bookmark' } },
  { path: 'todo', component: TodoComponent, data: { animation: 'todo' } },
  { path: 'notes', component: NotesComponent, data: { animation: 'note' } },
  { path: 'notes/addnote', component: AddnoteComponent },
  { path: 'notes/:id', component: EditnoteComponent },
  { path: 'todo/addtodo', component: AddtodoComponent },
  { path: 'todo/:id', component: EdittodoComponent },
  { path: 'bookmarks/addbookmark', component: AddbookmarkComponent },
  {
    path: 'bookmarks/managebookmark', component: ManagebookmarkComponent, children: [
      { path: ':id', component: EditbookmarkComponent }

    ]
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
