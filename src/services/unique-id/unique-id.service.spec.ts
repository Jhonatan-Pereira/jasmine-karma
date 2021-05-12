// describe('O artefato que queremos testar', () => {
//   it('Primeira condição que queremos testar', () => {

//   });
//   it('Segunda condição que queremos testar', () => {

//   });
// });

// Jasmine 
// #blablabla should blablabla when blablabla
// #blablabla deve blablabla quando blablabla

import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for(let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      // expect(() => service.generateUniqueIdWithPrefix(null)).toThrow();
      // expect(() => service.generateUniqueIdWithPrefix(undefined)).toThrow();
      // expect(() => service.generateUniqueIdWithPrefix('')).toThrow();
      const emptyValues = [null, undefined, ''];
      emptyValues.forEach(emptyValeu => {
        expect(() => service.generateUniqueIdWithPrefix(emptyValeu)).toThrow();
      });
    });
});