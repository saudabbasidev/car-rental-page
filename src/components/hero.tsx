import { CreditCard, KeyRound, BadgeDollarSign } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

export default function Herosection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Find Rent, Book a car
            <br />
            <span className="font-normal">quickly and easily!</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="flex justify-center" data-aos="fade-up">
          {/* Car */}
          <img
            src="/hero.png"
            alt="Car"
            className=" w-full max-w-6xl object-contain"
          />
        </div>

        {/* Scroll indicator */}

        {/* Marketplace */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Check out
            <br />
            our marketplace
          </h2>

          <p className="mt-4 text-gray-500">
            Find your drive through our easy service
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3" data-aos="fade-up">
          {/* Card 1 */}
          <div className="rounded-3xl bg-sky-50 p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
              <CreditCard className="text-gray-700" />
            </div>

            <h3 className="mt-8 text-xl font-semibold">
              No credit card needed
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Tap the Rent icon in the Cabx app and complete your reservation.
              You can choose to pay in advance to save money.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-gray-50 p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
              <KeyRound className="text-gray-700" />
            </div>

            <h3 className="mt-8 text-xl font-semibold">Super fast check-In</h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Tap the Rent icon in the Cabx app and complete your reservation.
              You can choose to pay in advance to save money.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-amber-50 p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
              <BadgeDollarSign className="text-gray-700" />
            </div>

            <h3 className="mt-8 text-xl font-semibold">
              No extra costs on arrival
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Tap the Rent icon in the Cabx app and complete your reservation.
              You can choose to pay in advance to save money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
