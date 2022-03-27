import { useRef } from "react";

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, email, password);
  };

  //getting access to DOM nodes for grabbing input values or set focus

  return (
    <>
      <label>
        Name:
        <input placeholder="name" type="text" ref={nameRef}></input>
      </label>
      <label>
        Email:
        <input placeholder="email" type="text" ref={emailRef}></input>
      </label>
      <label>
        Password:
        <input placeholder="password" type="text" ref={passwordRef}></input>
      </label>
      <hr />
      <button onClick={() => nameRef.current.focus()}>Focus Name Input</button>
      <button onClick={() => emailRef.current.focus()}>
        Focus Email Input
      </button>
      <button onClick={() => passwordRef.current.focus()}>
        Focus Password Input
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
