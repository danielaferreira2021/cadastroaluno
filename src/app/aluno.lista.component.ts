import { Component, OnInit } from "@angular/core";
import { Aluno } from "./aluno";
import { AlunoService } from "./aluno.service";

// Aqui foi utilizado o template aluno-lista.component.html para apresentar os dados em forma de lista
@Component({
    selector: 'app-aluno-lista',
    templateUrl: 'aluno-lista.component.html',
    providers: [ AlunoService ]
})
export class AlunoListaComponent implements OnInit {
    alunos: Aluno[] = [];

    constructor(private service: AlunoService) {}

    ngOnInit(): void {
        this.alunos = this.service.getAlunos();
    }
}