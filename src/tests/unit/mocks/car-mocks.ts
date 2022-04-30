import { Document } from "mongoose";
import { Car } from "../../../interfaces/CarInterface";

export const carRequestExample = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
};

export const carResponseExample = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
};

export const readMethodResponse = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  },
  {
    _id: "4edd40c86762e0fb12000004",
    model: "Ferrari Testarossa",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  }
];

export type CarDocType = Car & Document<any, any, any> & { _id: any };
