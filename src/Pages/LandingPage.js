import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaBookmark, FaStar } from "react-icons/fa";
function LandingPage() {
  return (
    <div>
      <section className="">
        <div>
          <h1 className=" mb-4 font-serif">
            <a>JavaNotes</a>
          </h1>
          <p className=" text-zinc-400">
            Deutsche Java Dokumentation für Schüler.
          </p>
          <div className="flex gap-5 mb-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button flex gap-2 place-content-center"
            >
              <FaBookmark size={18} className=" self-center" /> Docs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button flex gap-2 place-content-center"
            >
              <FaGithub size={20} className=" self-center" />
              Github
            </motion.button>
          </div>
          <h2 className="mb-4 font-serif"><a>Neues:</a></h2>
          <div className="recent flex gap-2 mb-4"><FaStar size={18} className=" self-center"/> <span className=" font-bold">Neu:</span>2d Array's</div>
          <div className="recent flex gap-2 mb-3"><FaStar size={18} className=" self-center"/> <span className=" font-bold">Neu:</span>Array's</div>
          <div className="recent flex gap-2 mb-3"><FaStar size={18} className=" self-center"/> <span className=" font-bold">Neu:</span>Funktionen</div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
