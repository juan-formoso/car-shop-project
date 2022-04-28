import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import BaseModel from '../../../models/index';
import { carRequestExample, carResponseExample } from '../mocks/car-mocks';

describe('Testa CarModel', () => {
  let carModel: CarModel;
  let stub: sinon.SinonStub;

  before(() => {
    carModel = new CarModel();
  });

  afterEach(() => {
    if (stub) {
      stub.restore();
    }
  });

  describe('Testa o método create', () => {
    it('deve criar um carro novo', async () => {
      stub = sinon.stub(BaseModel.prototype, 'create').resolves(carResponseExample);

      const car = await carModel.create(carRequestExample);

      expect(car).to.be.eql(carResponseExample);
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith(carRequestExample)).to.be.true;
    });
  });

  describe('Testa o método read', () => {
    it('deve retornar todos os carros', async () => {
      stub = sinon.stub(BaseModel.prototype, 'read').resolves([carResponseExample]);

      const cars = await carModel.read();

      expect(cars).to.be.eql([carResponseExample]);
      expect(stub.calledOnce).to.be.true;
    });
  });
  
  describe('Testa o método readOne', () => {
    it('deve retornar um carro', async () => {
      stub = sinon.stub(BaseModel.prototype, 'readOne').resolves(carResponseExample);

      const car = await carModel.readOne(carResponseExample._id);

      expect(car).to.be.eql(carResponseExample);
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith(carResponseExample._id)).to.be.true;
    });
  });

  describe('Testa o método update', () => {
    it('deve atualizar um carro', async () => {
      stub = sinon.stub(BaseModel.prototype, 'update').resolves(carResponseExample);

      const car = await carModel.update(carResponseExample._id, carRequestExample);

      expect(car).to.be.eql(carResponseExample);
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith(carResponseExample._id, carRequestExample)).to.be.true;
    });
  });

  describe('Testa o método delete', () => {
    it('deve deletar um carro', async () => {
      stub = sinon.stub(BaseModel.prototype, 'delete').resolves(carResponseExample);

      const car = await carModel.delete(carResponseExample._id);

      expect(car).to.be.eql(carResponseExample);
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith(carResponseExample._id)).to.be.true;
    });
  });
});
