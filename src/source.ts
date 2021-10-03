export interface Source { //can be used by test doubles or by real thing
    getChar(): string
}

export class SourceSpy implements Source {
    numberOfCalls: number = 0;

    getChar(): string{
        this.numberOfCalls++ //creating our own counter 
        return "a" // this is a fake
    }

    wasCalled(): boolean{
        return this.numberOfCalls > 0
    }
}