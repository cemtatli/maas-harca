import React from "react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

export default function Header({ money, total }) {
  return (
    <header className="w-full h-20 bg-primary dark:bg-secondary  flex items-center justify-between px-2 gap-4 sticky top-0 z-10 ">
      <div className="text-white text-xl md:text-3xl px-4 font-bold text-start md:text-center w-full select-none">
        {total > 0 && money - total !== 0 && (
          <div>
            Harcayacak <span> {money - total} ₺</span> paran kaldı, dikkatli ol !
          </div>
        )}
        {total === 0 && (
          <div>
            Tüm ödemeler için <span> {money} ₺</span> paranız var!
          </div>
        )}
        {money - total === 0 && <div>Paran malesef bitti, bir sonraki maaşınında görüşürüz!</div>}
      </div>
      <div
        className="cursor-pointer flex items-center justify-center px-2 py-2 "
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          localStorage.setItem("dark", document.documentElement.classList.contains("dark"));

          if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme", "light");
          }
        }}
      >
        <BsLightbulbFill className="w-6 h-6 cursor-pointer block dark:hidden text-white" />
        <BsLightbulbOffFill className="w-6 h-6 cursor-pointer hidden dark:block  text-white" />
      </div>
    </header>
  );
}
