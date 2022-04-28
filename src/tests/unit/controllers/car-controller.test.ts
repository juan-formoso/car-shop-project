import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import CarModel from '../../../models/CarModel';
import { 
  carRequestExample, 
  carResponseExample, 
  invalidRequestExample,
} from '../mocks/car-mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa CarController', () => {
  const app = server.getApp();
  const carModel = new CarModel();
  let response;

  describe('POST /cars', () => {

    before(async () => {
      sinon
        .stub(carModel.model, 'create')
        .resolves(carResponseExample);
    });
  
    after(() => {
      (carModel.model.create as sinon.SinonStub).restore();
    })
  
    it('Requisição realizada com sucesso', async () => {
      response = await chai.request(app).post('/cars').send(carRequestExample);
      expect(response.body).to.deep.equal(carResponseExample);
    });
  })
});
