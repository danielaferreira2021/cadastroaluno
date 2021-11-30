import { Aluno } from "./aluno";

// Criado a função AlunoService para fornecer a lista de alunos e seus dados
export class AlunoService {
    private alunos: Aluno[] = [
        new Aluno(
            'Daniela Ferreira',
            '02/09/1994',
            1212401,
            'Análise e Desenvolvimento de Sistemas'
        ),
        new Aluno(
            'Robinson Donizete da Silveira Santos',
            '26/04/1984',
            1212402,
            'Análise e Desenvolvimento de Sistemas'
        ),
        new Aluno(
            'Giovani Ferreira',
            '15/09/1980',
            1212403,
            'Administração'
        ),
        new Aluno(
            'Gilmar Ferreira',
            '12/03/1993',
            1212404,
            'Sociologia'
        ),
        new Aluno(
            'Andreia da Silveira Santos',
            '25/09/1980',
            1212405,
            'Gastronomia'
        ),
    ];

    getAlunos() {
        return this.alunos;
    }
}