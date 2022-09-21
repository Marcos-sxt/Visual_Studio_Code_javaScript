import { Animal } from "./src/animaisPolimorfismo";
import { Cachorro } from "./src/animaisCachorroPolimorfismo";
import { Cavalo } from "./src/animaisCavaloPolimorfismo";
import { Preguica } from "./src/animaisPreguicaPolimorfismo";

let cachorro1 = new Cachorro("Rex", 4)
let cavalo1 = new Cavalo("Eguinha pocoto", 19)
let preguica1 = new Preguica("Claudio", 25)

cachorro1.EmitirSom();
cachorro1.Correr();

cavalo1.EmitirSom();
cavalo1.Correr();

preguica1.EmitirSom();
preguica1.SubirEmArvores();