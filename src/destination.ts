export interface Destination {
    setChar(character: string): void
}

export class DestinationSpy implements Destination {
    numberOfCalls: number = 0;
    characters:string[] = []

    setChar(character){ //implementation + detail on how being called = spy
        this.numberOfCalls++ //creating our own counter 
        this.characters.push(character)
    }

    wasCalled(): boolean{
        return this.numberOfCalls > 0
    }

    recordedCharacters(): string[]{
        return this.characters
    }
}