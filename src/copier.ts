import { Destination } from "./destination";
import { Source } from "./source";

export class CharacterCopier {
    source: Source;
    destination: Destination;

    constructor(source: Source, destination: Destination){
        this.source = source;
        this.destination = destination;
    }

    copy(){
        while(true){
            const character = this.source.getChar()
            
            if(character === "\n"){
                break;
            }
            this.destination.setChar(character)
        }
        
        
    }
}