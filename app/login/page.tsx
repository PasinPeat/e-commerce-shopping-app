"use client";
import React from "react";
// import { authenticate } from "@lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { MouseEventHandler } from "react";
import { login, signup } from "../../lib/authActions";

export default function LoginPage() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="flex flex-col justify-center w-[300px] h-[600px] text-foreground text-xl gap-5">
        <div className=" inline-flex justify-between gap-3">
          <label htmlFor="email">Email:</label>
          <input className="w-3/4" id="email" name="email" type="email" required />
        </div>
        <div className=" inline-flex gap-3">
          <label htmlFor="password">Password:</label>
          <input className="w-3/4" id="password" name="password" type="password" required />
        </div>
        <div className="inline-flex justify-center gap-6 mt-9">

        <button className="btn-login bg-blue-500 " formAction={login}>
          Log in
        </button>
        <button className="btn-login bg-slate-200  dark:text-black" formAction={signup}>
          Sign up
        </button>
        </div>
      </form>
    </div>
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
