import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function Modal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#660000] to-[#990000] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-start mb-2 pb-1.5 border-b-1 border-[#f1e9bb]">
                Add new Song!
              </h2>

              <div className="flex items-center justify-between">
                <h1 className="text-start text-sm/6 font-medium text-white">
                  Telugu Title:
                </h1>
                <div className="w-4/5">
                  <input
                    id="telugu title"
                    name="telugu title"
                    type="telugu title"
                    autoComplete="telugu title"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-start text-sm/6 font-medium text-white">
                  Category:
                </h1>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>Worship</option>
                    <option>Praise</option>
                    <option>Thanksgiving</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-start text-sm/6 font-medium text-white">
                  Canva Link:
                </h1>
                <div className="w-4/5 mt-2">
                  <input
                    id="canva link"
                    name="canva link"
                    type="canva link"
                    autoComplete="canva link"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="block text-sm/6 font-medium text-white">
                  Pdf file upload:
                </h1>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-2">
                  <div className="text-center">
                    <DocumentIcon
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-amber-100 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-gray-100">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-100">PDF up to 5MB</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-[#660000] font-semibold w-full py-2 rounded"
                >
                  Done!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
