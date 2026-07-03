// FAQSection.tsx

const faqs = [
  {
    question: "What documents are required to rent a car?",
    answer:
      "You'll need a valid driver's license, a government-issued ID, and the required payment method at pickup.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Most bookings can be cancelled for free up to 24 hours before pickup. Check your booking details for specific terms.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Basic insurance is included with every rental. You can also purchase additional coverage during checkout.",
  },
  {
    question: "Are there any mileage limits?",
    answer:
      "Most rentals include unlimited mileage. Some premium or specialty vehicles may have mileage restrictions.",
  },
  {
    question: "Can someone else drive the rental car?",
    answer:
      "Yes. Additional drivers can be added during booking or at pickup, subject to eligibility and applicable fees.",
  },
];

export default function FAQSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-base-content/70">
            Everything you need to know before renting your car.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus rounded-xl border border-base-300 bg-base-100"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-lg font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content text-base-content/70">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}