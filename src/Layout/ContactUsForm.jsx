import React from "react";

export default function ContactUsForm() {
  /**
   * 1. Za label for i id najbolje koristiti malo pocetno slovo
   * 2. Forma treba da bude kontrolisana sa useState hook-om
   * 3. onSubmit handler da ispise podatke koje si pokupio
   * 4. U polje za Phone mogu da upisem reci
   * 5. Dodaj validaciju za za sva polja koja su obavezna
   * 6. Dodaj dugme za reset forme koje ce da isprazni sva polja
   * 7. Prati console segment u browseru za greske for nije u skladu sa html standardom (ne pise se tako vec malo drugacije)
   *
   * Bonus: sve to je cilj da dobijes finalni payload koji bi poslao na backend
   * Nesto poput ovoga da ispise u console.log na submit:
   *
   * {
   *   firstName: '',
   *   lastName: '',
   *   email: '',
   *   phone: '',
   *   message: ''
   * }
   */

  return (
    <>
      <div className="flex justify-center mt-15">
        <form className="bg-gray-100 border-2 rounded-2xl p-4 border-r-15 border-b-15 border-gray-700">
          <div>
            <label for="FirstName" className="block text- m-1">
              First Name:
            </label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              className="border-b border-black-300 m-1 w-full"
            />
          </div>

          <div>
            <label for="LastName" className="block text-left m-1">
              Last Name:
            </label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              className="border-b border-black-300 m-1 w-full"
            />
          </div>

          <div>
            <label for="Email" className="block text-left m-1">
              E-mail:
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="border-b border-black-300 m-1 w-full"
            />
          </div>

          <div>
            <label for="Phone" className="block text-left m-1">
              Phone:
            </label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              className="border-b border-black-300 m-1 w-full"
            />
          </div>

          <div>
            <label for="Message" className="block text-left m-1">
              Message:
            </label>
            <br />
            <textarea
              id="Message"
              name="Message"
              rows="4"
              cols="50"
              className="border border-black-300 m-1 w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-2 px-4 rounded m-1 hover:bg-purple-900"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
