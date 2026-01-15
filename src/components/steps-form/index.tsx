"use client";

import { useState } from "react";

export function Root() {
  const [step, setStep] = useState(0);
  const maxStep = 3;

  return (
    <form action="" className="w-full space-y-2">
      <div className="flex items-center gap-6">
        {step >= 0 ? (
          <>
            <div className="flex items-center justify-center">
              <div
                className={`size-8 border-2 ${step >= 0 ? "border-blue-500" : "border-slate-500"} ${step > 0 && "ba"} rounded-full`}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="username" className="text-slate-200 text-lg">
                User Name
              </label>
              <input
                className="text-slate-300 
                        px-2 py-1.5 border border-slate-500 
                        rounded-lg outline-blue-800 outline-0 not-empty:border-red-500
                        active:border-blue-900"
                placeholder="your user name..."
                type="text"
                name="username"
              />
            </div>
          </>
        ) : null}
      </div>
    </form>
  );
}
