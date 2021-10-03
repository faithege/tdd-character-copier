import { CharacterCopier } from "./copier";
import { DestinationSpy } from "./destination";
import { SourceSpy } from "./source";

describe('The character copier should', () => {
  it('copy a character form the source to the destination', () => {
    const destination = new DestinationSpy
    const source = new SourceSpy

    const copier = new CharacterCopier(source, destination)

    copier.copy()

    expect(source.wasCalled).toBeTruthy;
    expect(destination.wasCalled).toBeTruthy;
  });
});