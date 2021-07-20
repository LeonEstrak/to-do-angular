import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/todos/cards/cards.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDataService } from './services/todo-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TodosComponent,
    AddDialogComponent,
    AddButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [TodoDataService, MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
