export interface Destination {
    setChar(character: string): void
}

export class DestinationSpy implements Destination {
    numberOfCalls: number = 0;
    character:string = ''

    setChar(character): string{ //implementation + detail on how being called = spy
        this.numberOfCalls++ //creating our own counter 
        this.character = character
        return undefined
    }

    wasCalled(): boolean{
        return this.numberOfCalls > 0
    }

    recordedCharacter(): string{
        return this.character
    }
}