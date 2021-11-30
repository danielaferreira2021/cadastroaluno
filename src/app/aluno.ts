export class Aluno {
    // Criado a classe Aluno e suas propriedades nome, ru, data de nascimento e curso
    constructor(
        public nome: string,
        public dataNascimento: string,
        public ru: number,
        public curso: string
    ) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.ru = ru;
        this.curso = curso;
    }
}