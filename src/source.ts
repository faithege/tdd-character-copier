export interface Source { //can be used by test doubles or by real thing
    getChar(): string
}

export class SourceSpy implements Source {
    numberOfCalls: number = 0;
    characters: string[] = ["a", "b", "c", "\n"]

    getChar(): string{
        const character = this.characters[this.numberOfCalls]
        this.numberOfCalls++ //creating our own counter 
        return character 
    }

    wasCalled(): boolean{
        return this.numberOfCalls > 0
    }
}