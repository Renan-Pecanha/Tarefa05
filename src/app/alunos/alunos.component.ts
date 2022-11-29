import { Component, OnInit } from '@angular/core';
import { ALUNOS } from '../mock-alunos';
import { Aluno } from './aluno.model';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent {
aluno : Aluno = {
  id:1,
  name:"Renan Pecanha",
  RA:12345678,
  turma:'2°A',
};
  alunos=ALUNOS;
selectedAluno?:Aluno;

onSelect(aluno:Aluno):void{
  this.selectedAluno=aluno
  }
}
