"use client";
import React from "react";
// import { authenticate } from "@lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { MouseEventHandler } from "react";
import { login, signup } from './actions'

export default function LoginPage() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}

// function LoginButton() {
//   const { pending } = useFormStatus();

//   const handleClick = (event: React.FormEvent) => {
//     if (pending) {
//       event.preventDefault();
//     }
//   };

//   return (
//     <button aria-disabled={pending} type="submit" onClick={handleClick}>
//       Login
//     </button>
//   );
// }
