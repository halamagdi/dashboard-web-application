import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { FormsModule } from '@angular/forms';
import { EditnoteComponent } from './editnote/editnote.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { AddbookmarkComponent } from './addbookmark/addbookmark.component';
import { ManagebookmarkComponent } from './managebookmark/managebookmark.component';
import { EditbookmarkComponent } from './editbookmark/editbookmark.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonsComponent,
    BookmarksComponent,
    TodoComponent,
    NotesComponent,
    AddnoteComponent,
    EditnoteComponent,
    AddtodoComponent,
    EdittodoComponent,
    AddbookmarkComponent,
    ManagebookmarkComponent,
    EditbookmarkComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
