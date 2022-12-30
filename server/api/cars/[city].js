import cars from "@/data/cars.json";
export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  let filterdCars = cars;
  filterdCars = filterdCars.filter(
    (car) => car.city.toLowerCase() === city.toLowerCase()
  );

  if (make) {
    filterdCars = filterdCars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }

  if (minPrice) {
    filterdCars = filterdCars.filter((car) => car.price >= parseInt(minPrice));
  }

  if (maxPrice) {
    filterdCars = filterdCars.filter((car) => car.price < parseInt(maxPrice));
  }

  return filterdCars;
});
