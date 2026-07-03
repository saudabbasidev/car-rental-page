import { CarFront, Fuel, Settings2 } from "lucide-react";
import CarModal from "./modal";
import { cars } from "./constant";


export default function CarCard() {
  return (
    <div className="px-6 flex flex-wrap justify-center items-center gap-10 ">
      {cars.map((car) => (
        <div
          key={car.id}
          className="card aspect-square w-80 bg-blue-50 shadow-md"
        >
          <div className="card-body">

            {/* Car Name */}
            <h2 className="card-title">{car.name}</h2>

            <p>
              {/* Car Price */}
              <span className="text-4xl font-bold">${car.price}</span>
              <span className="text-sm text-gray-500"> /day</span>
            </p>
{/* Car Image */}
            <figure className="py-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-56 object-contain"
              />
            </figure>
{/* Car Other */}
            <div className="flex justify-between text-center text-xs">
              <div>

                <Settings2 className="mx-auto text-primary" size={20} />
                <p>{car.transmission}</p>
              </div>

              <div>
                <CarFront className="mx-auto text-warning" size={20} />
                <p>{car.drive}</p>
              </div>

              <div>
                <Fuel className="mx-auto text-success" size={20} />
                <p>{car.mpg}</p>
              </div>
            </div>


{/* Car Details Model  */}


            <label
              htmlFor={`my_modal_${car.id}`}
              className="btn btn-neutral"
            >
              Open Modal
            </label>

            <input
              type="checkbox"
              id={`my_modal_${car.id}`}
              className="modal-toggle"
            />

            <div className="modal" role="dialog">
              <div className="modal-box w-md max-sm:w-screen h-150 bg-none">

                {/* Each Car Modal Details Passing as Props as map will be running */}
                <CarModal car={car} />
              </div>

              <label
                className="modal-backdrop"
                htmlFor={`my_modal_${car.id}`}
              >
                Close
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}