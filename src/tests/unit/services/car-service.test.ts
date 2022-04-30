import { expect } from "chai";
import mongoose from "mongoose";
import sinon from "sinon";
import CarService from "../../../services/CarService";
import { carRequestExample, carResponseExample, readMethodResponse } from "../mocks/car-mocks";

describe("Testa CarService", () => {
  describe("Cria um carro", () => {
    let carService: CarService;
    let createStub: sinon.SinonStub;

    before(() => {
      carService = new CarService();
      createStub = sinon.stub(mongoose.Model, "create");
    });

    after(() => {
      createStub.restore();
    });

    it("Deve criar um carro", async () => {
      createStub.returns(carResponseExample);

      const car = await carService.create(carRequestExample);

      expect(car).to.be.deep.equal(carResponseExample);
    });
  });

  describe("Busca todos os carros", () => {
    let carService: CarService;
    let findStub: sinon.SinonStub;

    before(() => {
      carService = new CarService();
      findStub = sinon.stub(mongoose.Model, "find");
    });

    after(() => {
      findStub.restore();
    });

    it("Deve buscar todos os carros", async () => {
      findStub.returns(readMethodResponse);

      const cars = await carService.read();

      expect(cars).to.be.deep.equal(readMethodResponse);
    });
  });
});
