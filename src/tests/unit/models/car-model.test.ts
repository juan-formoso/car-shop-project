import { expect } from "chai";
import mongoose from "mongoose";
import sinon from "sinon";
import CarModel from "../../../models/CarModel";
import { carRequestExample, carResponseExample, readMethodResponse } from "../mocks/car-mocks";

describe("Testa CarModel", () => {
  describe("Cria um carro", () => {
    let carModel: CarModel;
    let saveStub: sinon.SinonStub;

    before(() => {
      carModel = new CarModel();
      saveStub = sinon.stub(mongoose.Model, "create");
    });

    after(() => {
      saveStub.restore();
    });

    it("Deve criar um carro", async () => {
      saveStub.returns(carResponseExample);

      const car = await carModel.create(carRequestExample);

      expect(car).to.be.deep.equal(carResponseExample);
    });
  });

  describe("Busca todos os carros", () => {
    let carModel: CarModel;
    let findStub: sinon.SinonStub;

    before(() => {
      carModel = new CarModel();
      findStub = sinon.stub(mongoose.Model, "find");
    });

    after(() => {
      findStub.restore();
    });

    it("Deve buscar todos os carros", async () => {
      findStub.returns(readMethodResponse);

      const cars = await carModel.read();

      expect(cars).to.be.deep.equal(readMethodResponse);
    });
  });

  describe("Busca um carro", () => {
    let carModel: CarModel;
    let findOneStub: sinon.SinonStub;

    before(() => {
      carModel = new CarModel();
      findOneStub = sinon.stub(mongoose.Model, "findOne");
    });

    after(() => {
      findOneStub.restore();
    });

    it("Deve buscar um carro", async () => {
      findOneStub.returns(readMethodResponse[0]);

      const car = await carModel.readOne(readMethodResponse[0]._id);

      expect(car).to.be.deep.equal(readMethodResponse[0]);
    });
  });

  describe("Atualiza um carro", () => {
    let carModel: CarModel;
    let findOneAndUpdateStub: sinon.SinonStub;

    before(() => {
      carModel = new CarModel();
      findOneAndUpdateStub = sinon.stub(mongoose.Model, "findOneAndUpdate");
    });

    after(() => {
      findOneAndUpdateStub.restore();
    });

    it("Deve atualizar um carro", async () => {
      findOneAndUpdateStub.returns(readMethodResponse[0]);

      const car = await carModel.update(readMethodResponse[0]._id, carRequestExample);

      expect(car).to.be.deep.equal(readMethodResponse[0]);
    });
  });
});
