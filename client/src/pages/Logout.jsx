import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";

export default function Logout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { disconnect } = useStateContext();

  return (
    <div>
      {" "}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#1c1c24] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-[30%] sm:p-6">
                  <div>
                    <div className="mt-3 text-justify sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-epilogue text-center font-bold leading-8 text-white"
                      >
                        Cerrar Sesion?
                      </Dialog.Title>
                      <div className="mt-2 flex-col"></div>
                    </div>
                  </div>
                  <div className="flex gap-[8px] mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm "
                      onClick={() => {
                        disconnect();
                        navigate("/");
                      }}
                    >
                      Cerrar Sesion
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#1dc071] px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm "
                      onClick={() => {
                        setOpen(false);
                        navigate("/");
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
