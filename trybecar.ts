class CarrinhoDeLego{
    cor:string;
    tamanhoDasRodas: number;
    modelo:string;
    constructor(cor: string, tamanhoDasRodas: number, modelo:string){
        this.cor = cor;
        this.tamanhoDasRodas = tamanhoDasRodas;
        this.modelo = modelo;
    }
    moverParaFrente(){
        console.log(`o carrinho de modelo ${this.modelo} se moveu para frente`)
    }
    buzinar(){
        console.log('bibi')
    }
}

const mustang = new CarrinhoDeLego('vermelho', 16, 'mustang');

abstract class CarrinhoAbstrato {
    private _cor: string;
    private _tamanhoDasRodas: number;
    constructor(cor:string, tamanhoDasRodas: number){
        this._cor = cor;
        this._tamanhoDasRodas = tamanhoDasRodas
    }
    moverParaFrente(){
        console.log(`o carrinho de cor ${this._cor} se moveu para frente`)
    }
    setCor(novaCor:string){
        this._cor = novaCor
    }
    getCor(){
        return this._cor
    }
}

class CarrinhoComMotor extends CarrinhoAbstrato{
    private _motor: string;
    constructor(cor: string, tamanhoDasRodas: number , motor:string){
        super(cor, tamanhoDasRodas)
        this._motor = motor
    }
}

const golQuadrado = new CarrinhoComMotor('vermelho', 14, 'álcool')
// golQuadrado.moverParaFrente() 

class CarrinhoSemMotor extends CarrinhoAbstrato{
    constructor(cor: string, tamanhoDasRodas: number){
        super(cor,tamanhoDasRodas)
    }
    moverParaFrente(){
        console.log(`empurrei o carrinho para frente, ele bateu na parede e quebrou`)
    }
}

const corsa = new CarrinhoSemMotor ('azul', 12)
// corsa.moverParaFrente()

interface CarrinhoComComportamento {
    moverParaFrente():void;
}

class CarrinhoControleRemoto extends CarrinhoAbstrato implements CarrinhoComComportamento{
    controle: boolean;
    constructor(cor:string, tamanhoDasRodas: number, controle: boolean){
        super(cor,tamanhoDasRodas)
        this.controle = controle
    }
    moverParaTras(){
       console.log(`moveu para trás`) 
    }
}

const meusCarrinhos: CarrinhoComComportamento[] = [mustang, golQuadrado, corsa]

const brincar = (carrinhos: CarrinhoComComportamento[]) =>{
    for(const carrinho of carrinhos){
        carrinho.moverParaFrente()
    }
}

brincar(meusCarrinhos)



