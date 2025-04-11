import { JSX } from "react";

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>
      <form className="space-y-6 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-600 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-600 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;
