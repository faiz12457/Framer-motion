import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

import {
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

function SideBar() {
  const [open, setIsOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <motion.div
      layout
    

      
      className={`border-r relative border-slate-300 h-screen ${
        open ? "w-[225px]" : "w-fit"
      }  bg-white shrink-0 p-2`}
    >
      <TitleSec open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"Dashboard"}
        />

        <Option
          Icon={FiDollarSign}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"Sales"}
        />

        <Option
          Icon={FiMonitor}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"View Site"}
        />

        <Option
          Icon={FiShoppingCart}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"Products"}
        />

        <Option
          Icon={FiTag}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"Tags"}
        />

        <Option
          Icon={FiUsers}
          open={open}
          selected={selected}
          setSelected={setSelected}
          title={"Members"}
        />
      </div>

      <ToogleClose open={open} setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default SideBar;

function Option({ Icon, title, open, selected, setSelected }) {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full   items-center rounded-md  transition-colors
          ${
            selected === title
              ? "bg-indigo-100 text-indigo-800"
              : " text-slate-500 hover:bg-slate-100"
          }`}
    >
      <motion.div
        layout
        className="grid w-10 h-full  place-content-center text-lg"
      >
        <Icon />
      </motion.div>

      {open && (
        <motion.span
          layout
          initial={{
            y: 15,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-bold "
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
}

function TitleSec({ open }) {
  return (
    <motion.div layout className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between transition-colors hover:bg-slate-100 rouded-md">
        <div className=" flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">Dashboard</span>
              <span className="block text-xs text-slate-500">Pro plan</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </motion.div>
  );
}

function Logo() {
  return (
    <motion.div
      layout
      className="grid size-10 place-content-center rounded-md shrink-0 bg-indigo-600"
    >
      <svg
        id="logo-35"
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"></path>{" "}
        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"></path>{" "}
      </svg>
    </motion.div>
  );
}

function ToogleClose({ open, setIsOpen }) {
  return (
    <motion.button
    layout
      onClick={() => setIsOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 text-lg  place-content-center"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>

        {open && (
          <motion.span
            layout
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}













