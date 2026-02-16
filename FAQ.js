import React, { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "What is PRIMETECH GROUP?", a: "A tech agency providing innovative IT solutions." },
    { q: "What services do you offer?", a: "Web development, mobile apps, IT consulting, and more." },
    { q: "How can I contact you?", a: "Use the form below or email us at info@primetech.com" },
  ];

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => setOpen(open === index ? null : index)}>
            {faq.q}
          </button>
          {open === index && <p>{faq.a}</p>}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
