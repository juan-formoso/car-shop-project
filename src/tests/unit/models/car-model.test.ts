import { expect } from "chai";
import mongoose from "mongoose";
import sinon from "sinon";
import CarModel from "../../../models/CarModel";
import { carRequestExample, carResponseExample } from "../mocks/car-mocks";

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
});
