// Escreva testes que cubram, pelo menos, 15% da camada Service.
// Será validado que cobertura total das linhas dos arquivos na pasta services é maior ou igual a 15%;

import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../services/CarService';
import { carRequestExample, carResponseExample } from '../mocks/car-mocks';

describe('Testa CarService', () => {
  describe('Cria um carro', () => {
    let carService: CarService;
    let createStub: sinon.SinonStub;

    before(() => {
      carService = new CarService();
      createStub = sinon.stub(mongoose.Model, 'create');
    });

    after(() => {
      createStub.restore();
    });

    it('Deve criar um carro', async () => {
      createStub.returns(carResponseExample);

      const car = await carService.create(carRequestExample);

      expect(car).to.be.deep.equal(carResponseExample);
    });
  });
});
