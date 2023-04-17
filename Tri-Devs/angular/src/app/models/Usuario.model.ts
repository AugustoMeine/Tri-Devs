export class Usuario{
    idUsuario:number;
    login:string;
    senha:string;
    nome:string;
    dataCriacao:string;
    dataDesligamento:string;

    constructor(idUsuario:number,login:string,senha:string,nome:string,dataCriacao:string,dataDesligamento:string){
        this.idUsuario = idUsuario;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.dataCriacao = dataCriacao;
        this.dataDesligamento = dataDesligamento;
    }
}
    