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
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();
    // const firstId = service.generateUniqueIdWithPrefix('app');
    // const secondId = service.generateUniqueIdWithPrefix('app');
    // expect(firstId).not.toBe(secondId);
    const ids = new Set();
    for(let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});