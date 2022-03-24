class Jogada {
    constructor(_tipo, jogador){
	
		if (!(jogador instanceof Jogador))
			 throw {type:"jp_argument", message:"argumento de tipo invalido"};
		
        this.tipo = _tipo;
        this.jogador = jogador;
        this.ganhaDe = [];
     
    }
    
    _print(j1,j2) {
        console.log("Jogador ", j1.jogador.nome, " jogou ", j1.tipo," e ganhou do ", j2.jogador.nome, " que jogou ", j2.tipo);
    }
    
    _verificaP1venceP2(p1,p2)
    {
        return p1.ganhaDe.some(item => p2 instanceof item);
    }
    
    jogar(oponente) {
        
        if (this.constructor.name === oponente.constructor.name) {
            console.log("empate!");
            return null;
        } 
        
        if ( this._verificaP1venceP2(this, oponente) )
        {
            this._print(this,oponente);
            return this.jogador;
        } 
        
        if  ( this._verificaP1venceP2(oponente, this) )
        {
            this._print(oponente, this)
            return oponente.jogador;
        }
    }
}

class Pedra extends Jogada {
    constructor(jogador){
        super("pedra", jogador);
        this.ganhaDe = [Tesoura];
    }
}

class Papel extends Jogada {
    constructor(jogador){
        super("papel", jogador);
        this.ganhaDe = [Pedra];
    }
}

class Tesoura extends Jogada {
    constructor(jogador){
        super("tesoura", jogador);
        this.ganhaDe = [Papel];
    }
}


class Jogador
{
	constructor(_nome)
	{
		this.nome = _nome;
	}
	
	jogarPedra() { return new Pedra(this); }
	jogarPapel() { return new Papel(this); }
	jogarTesoura() { return new Tesoura(this); }
	
	
}


function jokenPo(jogada1, jogada2)
{
    if (!(jogada1 instanceof Jogada) || !(jogada2 instanceof Jogada) ) 
        throw {type:"jp_argument", message:"argumento de tipo invalido"};
    
    return jogada1.jogar(jogada2);
}


function jokenPo_teste()
{

	var ok = (text) => console.log("(",text,") => OK!");
	var falha = (text) => console.log("(",text,") => FALHA!");
	var assert = (valid, text) => valid ? ok(text) : falha(text);
	
	var p1 = new Jogador("Lucas");
	var p2 = new Jogador("Mané");
	
	
	var result = jokenPo(
					p1.jogarPapel(), 
					p2.jogarTesoura() 
				);
				
	assert(result == p2, "Papel x Tesoura");
	
	
	result = jokenPo(
				p1.jogarPedra(),
				p2.jogarTesoura()
			 );
	assert(result === p1, "Pedra x Tesoura");	
	
	
	result = jokenPo(
				p1.jogarPedra(),
				p2.jogarPapel()
			);
	assert(result === p2, "Pedra x Papel");
		

	
	result = jokenPo(
				p1.jogarPedra(),
				p2.jogarPedra()
			 );
	assert(result === null, "empate");
	
		
	try	
	{
		result = jokenPo("a",2);
		falha("jokenPo -Exception esperada nao disparada");
	}
	catch(err)
	{
		(err.type == "jp_argument") ? 
			ok("jokenPo - validação de tipo de entrada") :
			falha("Exception não esperada");
	}
	
	
	try	
	{
		result = new Jogada("", 0)
		falha("Exception esperada nao disparada");
	}
	catch(err)
	{
		(err.type == "jp_argument") ? 
			ok("Jogada - validação de tipo de entrada") :
			falha("Jogada - Exception não esperada");
	}
	
}