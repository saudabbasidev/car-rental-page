
type Car = {
  id: number;
  name: string;
  price: number;
  image: string;
  transmission: string;
  drive: string;
 mpg: string;
  specs: [string, string][];
};

export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: 54,
    image: "/hero.png",
    transmission: "Automatic",
    drive: "FWD",
    mpg: "23 MPG",
    specs: [
      ["City MPG", "21"],
      ["Class", "Sedan"],
      ["Combined MPG", "24"],
      ["Cylinders", "4"],
      ["Displacement", "2.0"],
      ["Drive", "FWD"],
      ["Fuel Type", "Gas"],
      ["Highway MPG", "30"],
      ["Make", "Toyota"],
      ["Model", "Corolla"],
      ["Transmission", "Automatic"],
      ["Year", "2022"],
    ],
  },
  {
    id: 2,
    name: "Honda Civic",
    price: 62,
    image: "/hero.png",
    transmission: "CVT",
    drive: "FWD",
    mpg: "31 MPG",
    specs: [
      ["City MPG", "30"],
      ["Class", "Sedan"],
      ["Combined MPG", "33"],
      ["Cylinders", "4"],
      ["Displacement", "2.0"],
      ["Drive", "FWD"],
      ["Fuel Type", "Gas"],
      ["Highway MPG", "38"],
      ["Make", "Honda"],
      ["Model", "Civic"],
      ["Transmission", "CVT"],
      ["Year", "2023"],
    ],
  },
  {
    id: 3,
    name: "Kia Stinger AWD",
    price: 85,
    image: "/hero.png",
    transmission: "Automatic",
    drive: "AWD",
    mpg: "24 MPG",
    specs: [
      ["City MPG", "21"],
      ["Class", "Midsize Car"],
      ["Combined MPG", "24"],
      ["Cylinders", "4"],
      ["Displacement", "2.5"],
      ["Drive", "AWD"],
      ["Fuel Type", "Gas"],
      ["Highway MPG", "29"],
      ["Make", "Kia"],
      ["Model", "Stinger AWD"],
      ["Transmission", "Automatic"],
      ["Year", "2022"],
    ],
  },
  {
    id: 4,
    name: "BMW M4",
    price: 120,
    image: "/hero.png",
    transmission: "Automatic",
    drive: "RWD",
    mpg: "20 MPG",
    specs: [
      ["City MPG", "16"],
      ["Class", "Sports Car"],
      ["Combined MPG", "20"],
      ["Cylinders", "6"],
      ["Displacement", "3.0"],
      ["Drive", "RWD"],
      ["Fuel Type", "Gas"],
      ["Highway MPG", "23"],
      ["Make", "BMW"],
      ["Model", "M4"],
      ["Transmission", "Automatic"],
      ["Year", "2024"],
    ],
  },
];