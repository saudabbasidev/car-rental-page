import CarCard from "./components/card";
import FAQ from "./components/faq";
import Herosection from "./components/hero";
import RentalCities from "./components/map";
import Navbar from "./components/navbar";
import Reviews from "./components/reviews";
import Search from "./components/Search";

const App = () => {
  return (
    <>
    <Navbar/>
      <main className="max-w-360 mx-auto ">
        <Herosection  />

        <div className="px-10 mt-10 py-10" >
          <h1 className="font-bold text-4xl">Car Catalogue</h1>
          <p className="py-2">Explore the cars you might like</p>
        </div>

        <section className="" >
          <Search  />
        </section>

        <section className="flex flex-wrap gap-10 items-center justify-center">
          <CarCard/>
        </section>
        <RentalCities/>
        <Reviews/>
        <FAQ/>
      </main>
    </>
  );
};

export default App;
