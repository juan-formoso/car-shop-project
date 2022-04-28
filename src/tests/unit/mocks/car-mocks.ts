export const carRequestExample = {
   model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: 3500000,
   seatsQty: 2,
   doorsQty: 2
};

export const carResponseExample = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: 3500000,
   seatsQty: 2,
   doorsQty: 2
};

/* Adicione requests incompletas para propósitos de testes */

// Crie a request com um objeto vazio
export const EmptyObjectRequest = {};

// Crie um carro com quantidade de assentos inferior a 2;
export const InvalidSeatsRequest = {
   model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: 3500000,
   seatsQty: 1,
   doorsQty: 2
};

// Crie um carro com quantidade de portas inferior a 2;
export const InvalidDoorsRequest = {
   model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: 3500000,
   seatsQty: 2,
   doorsQty: 1
};

// Crie um carro sem model, year, color, status e buyValue;
export const MissingValuesRequest = {
   seatsQty: 2,
   doorsQty: 2
};

// Crie um carro sem portas e assentos;
export const MissingSeatsAndDoorsRequest = {
   model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: 3500000
};

// Crie um carro com os tipos de valores diferentes;
export const DifferentTypesRequest = {
   model: "Ferrari Maranello",
   year: 1963,
   color: "red",
   buyValue: "3500000",
   seatsQty: 2,
   doorsQty: 2,
};
