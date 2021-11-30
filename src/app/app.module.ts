import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunoListaComponent } from './aluno.lista.component';
import { AlunoService } from './aluno.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
