import { useEffect, useState } from "react";

export default function ContactUsForm({isEdit}) {
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

  const updData = {
    firstName: "Uros",
    lastName: "Tomic",
    email: "tomicuros006@gmail.com",
    phone: "38100000000",
    message: "message"
  }

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(()=>{
    if (isEdit){
      setForm(updData)
    }
  },[isEdit])

  const onChange = (e) =>{
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }


  const onSubmit = (e) =>{
    e.preventDefault();
    console.log("Form Data Submitted: ", form);
  }

  const onReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  /*

  *PRIMER KAKO DA NE RADIM JER JE KOMPLIKOVANIJE I MANJE EFIKASNO*

  const [firstName, setFirstName] = useState("");
  console.log("First Name:", firstName);
  const [lastName, setLastName] = useState("");
  console.log("Last Name:", lastName);


  
  const onChange = (e) => {
    const {name, value} = e.target;
    if(name === "firstName"){
      setFirstName(value);
    }else if(name === "lastName"){
      setLastName(value);
    }
  }*/

  return (
    <>
      <div className="flex justify-center mt-15">
        <form className="bg-gray-100 border-2 rounded-2xl p-4 border-r-15 border-b-15 border-gray-700" onSubmit={onSubmit}>
          <div>
            <label htmlFor="firstName" className="block text- m-1">
              First Name:
            </label>
            <input
              onChange={onChange}
              value={form.firstName}
              type="text"
              id="firstName"
              name="firstName"
              className="border-b border-black-300 m-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-left m-1">
              Last Name:
            </label>
            <input
              onChange={onChange}
              value={form.lastName}
              type="text"
              id="lastName"
              name="lastName"
              className="border-b border-black-300 m-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left m-1">
              E-mail:
            </label>
            <input
              onChange={onChange}
              value={form.email}
              type="email"
              id="email"
              name="email"
              className="border-b border-black-300 m-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-left m-1">
              Phone:
            </label>
            <input
              onChange={onChange}
              value={form.phone}
              type="number"
              id="phone"
              name="phone"
              className="border-b border-black-300 m-1 w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left m-1">
              Message:
            </label>
            <br />
            <textarea
              onChange={onChange}
              value={form.message}
              id="message"
              name="message"
              rows="4"
              cols="50"
              className="border border-black-300 m-1 w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-700 text-white font-bold py-2 px-4 rounded m-1 hover:bg-purple-900"
          >
            Submit
          </button>

          <button
          type="reset"
          onClick={onReset}
          className="bg-purple-700 text-white font-bold py-2 px-4 rounded m-1 hover:bg-purple-900"
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
