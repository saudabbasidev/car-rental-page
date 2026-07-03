// Reviews.tsx

import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-base-content/70">
            Trusted by hundreds of happy drivers across Pakistan.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-left">

          {/* Review 1 */}
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-7 text-base-content/70">
                Booking was incredibly simple and the car was spotless.
                Pickup took less than five minutes. I'll definitely rent
                again.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content w-12 rounded-full flex items-center justify-center text-lg">
                    <span>AK</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Ali Khan</h3>
                  <p className="text-sm text-base-content/60">
                    Karachi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-7 text-base-content/70">
                Great customer support and affordable pricing. The car
                was exactly as shown on the website.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="flex items-center justify-center text-lg bg-secondary text-secondary-content w-12 rounded-full">
                    <span >SH</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Sarah Hassan</h3>
                  <p className="text-sm text-base-content/60">
                    Lahore
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-7 text-base-content/70">
                The entire rental experience was smooth. Clean cars,
                transparent pricing, and professional service.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-accent text-accent-content w-12 rounded-full flex items-center justify-center">
                    <span className="text-lg text-white">MR</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Muhammad Raza</h3>
                  <p className="text-sm text-base-content/60">
                    Islamabad
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center p-20">
              <a
      href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="shadow-lg border-2 btn btn-outline rounded-full px-6 h-14 gap-3 border-orange-300 hover:border-primary hover:bg-primary hover:text-primary-content transition-all duration-300"
    >
      {/* Google Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-6 w-6"
      >
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2c-2.1 1.6-4.7 2.4-7.3 2.4-5.3 0-9.7-3.3-11.3-8H6.2C9.5 39.5 16.1 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.1 7.1l6.2 5.2C39.1 36.8 44 31.1 44 24c0-1.3-.1-2.4-.4-3.5z"
        />
      </svg>

      <div className="flex flex-col items-start leading-none">
        <span className="text-xs opacity-70">See our</span>
        <span className="font-semibold">Reviews on Google</span>
      </div>
    </a>
        </div>
      </div>
    </section>
  );
}