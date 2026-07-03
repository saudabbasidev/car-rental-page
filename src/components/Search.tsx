import { CarFront } from "lucide-react";

const Search = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5 p-8">
      {/* Car Brand */}
      <div className="form-control w-52 grow">
        <legend className="fieldset-legend">Search Car</legend>
        <label className="input  rounded-lg">
          <CarFront strokeWidth={1.5} />
          <input type="search" className="" required placeholder="Search" />
        </label>
      </div>
      {/* Insurance */}

      {/* Category */}
      <div className="form-control  w-52 grow">
        <legend className="fieldset-legend">Fuel Type</legend>
        <select
          defaultValue="Fuel Type"
          className="select appearance-none"
        >
          <option disabled={true}>Fuel Type</option>
          <option>Gas</option>
          <option>Electric</option>
        </select>
      </div>

      {/* Fuel Type */}
      <div className=" form-control w-52 grow">
        <legend className=" fieldset-legend">Year</legend>
        <select defaultValue="Select Year" className="select">
          <option  disabled={true} >Select Year</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
      </div>
    </section>
  );
};

export default Search;
