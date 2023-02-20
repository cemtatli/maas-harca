import React from "react";
import { RxExclamationTriangle } from "react-icons/rx";

export default function Banner() {
  return (
    <div className="w-full h-12 flex items-center justify-center select-none flex-col md:flex-row  my-4">
      <RxExclamationTriangle className="mr-2 w-6 h-5 dark:text-secondary " />
      <p className="text-center text-sm font-semibold text-slate-800 dark:text-gray-200 tracking-wide my-2 ">
        Fiyatlar, tek başına yaşıyan bir bireyin ön görülen harcamaları baz alınarak belirlenmiştir.
      </p>
    </div>
  );
}
