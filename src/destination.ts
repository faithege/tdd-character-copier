export interface Destination {
    setChar(): void
}

export class DestinationSpy implements Destination {
    numberOfCalls: number = 0;

    setChar(): string{
        this.numberOfCalls++ //creating our own counter 
        //we don't care about the actual implementation
        return undefined
    }

    wasCalled(): boolean{
        return this.numberOfCalls > 0
    }
}