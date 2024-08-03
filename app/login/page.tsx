"use client";
import React from "react";
// import { authenticate } from "@lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { MouseEventHandler } from "react";
import { login, signup } from "../../lib/authActions";

export default function LoginPage() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="flex flex-col max-w-[300px] text-foreground">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button className="bg-blue-600 p-2" formAction={login}>Log in</button>
      <button className="bg-cyan-600 p-2" formAction={signup}>Sign up</button>
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
