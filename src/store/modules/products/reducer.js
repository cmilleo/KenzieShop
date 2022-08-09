import { v4 as uuid } from "uuid";

const inicialState = [
  {
    id: uuid(),
    name: "Galaxy Z Fold3 5G Preto 256GB",
    price: 10.619,
    img: "https://samsungbr.vtexassets.com/arquivos/ids/330104-285-189?v=637873941037470000&width=285&height=189&aspect=true",
  },
  {
    id: uuid(),
    name: "Galaxy S22 Ultra 5G Vinho 256GB",
    price: 8.549,
    img: "https://samsungbr.vtexassets.com/arquivos/ids/331125-285-189?v=637873967360230000&width=285&height=189&aspect=true",
  },
  {
    id: uuid(),
    name: "Galaxy Z Flip3 5G Preto 128GB",
    price: 4.999,
    img: "https://samsungbr.vtexassets.com/arquivos/ids/330129-285-189?v=637873941178430000&width=285&height=189&aspect=true",
  },
  {
    id: uuid(),
    name: "Galaxy S21 Ultra 5G Preto 256GB",
    price: 4.949,
    img: "https://samsungbr.vtexassets.com/arquivos/ids/330484-285-189?v=637873953842700000&width=285&height=189&aspect=true",
  },
  {
    id: uuid(),
    name: "Galaxy Tab S7 FE LTE Preto 128GB",
    price: 3.599,
    img: "https://samsungbr.vtexassets.com/arquivos/ids/338091-285-189?v=637889942125830000&width=285&height=189&aspect=true",
  },
];

const productsReducer = (state = inicialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
