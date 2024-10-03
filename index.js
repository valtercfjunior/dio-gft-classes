class Heroi {
   constructor(nome, idade, tipo) {
     this.nome = nome;
     this.idade = idade;
     this.tipo = tipo;
   }
 
   atacar() {
     let ataque;
 
     switch (this.tipo.toLowerCase()) {
       case "mago":
         ataque = "magia";
         break;
       case "guerreiro":
         ataque = "espada";
         break;
       case "monge":
         ataque = "artes marciais";
         break;
       case "ninja":
         ataque = "shuriken";
         break;
       default:
         ataque = "ataque desconhecido";
     }
 
     console.log(`O ${this.tipo}, ${this.nome}, atacou usando ${ataque}`);
   }
 }
 
 const heroi1 = new Heroi("Legolas", 30, "guerreiro");
 heroi1.atacar(); 
 
 const heroi2 = new Heroi("Zed", 25, "ninja");
 heroi2.atacar(); 
 
 const heroi3 = new Heroi("Gandalf", 150, "mago");
 heroi3.atacar(); 
 
 const heroi4 = new Heroi("Wukong", 40, "monge");
 heroi4.atacar(); 
 