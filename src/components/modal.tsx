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

type Props = {
  car: Car;
};

export default function CarModal({ car }: Props) {
  return (
    <div className="max-w-md max-sm:p-0 p-4 rounded-2xl h-full">
      {/* Hero Image */}
      <div className="rounded-xl bg-blue-600 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-36 object-contain p-3"
        />
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {["/cars/front.png", "/cars/top.png", "/cars/back.png"].map(
          (img, i) => (
            <div
              key={i}
              className="border rounded-lg p-2 bg-base-100 hover:border-primary cursor-pointer"
            >
              <img src={img} alt="" className="w-full h-16 object-contain" />
            </div>
          ),
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mt-5">{car.name}</h2>

      {/* Specs */}
      <div className="mt-4 space-y-2">
        {car.specs.map(([label, value],index:number) => (
          <div
            key={index}
            className="flex justify-between text-sm border-b border-base-200 pb-2"
          >
            <span className="text-base-content/60">{label}</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </div>
  );
}