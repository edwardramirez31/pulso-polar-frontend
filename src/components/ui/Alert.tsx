/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
  AlertOutlined,
  CheckCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  success: boolean;
}

export default function Alert({
  show,
  setShow,
  title,
  description,
  success,
}: Props) {
  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end sm:items-start"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {success ? (
                    <CheckCircleOutlined
                      style={{
                        fontSize: '24px',
                        color: 'rgb(74, 222, 128, 1)',
                      }}
                      className="h-6 w-6"
                    />
                  ) : (
                    <AlertOutlined
                      style={{ fontSize: '24px', color: 'red' }}
                      className="h-6 w-6"
                    />
                  )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span className="sr-only">Cerrar</span>
                    <CloseOutlined
                      style={{ fontSize: '20px' }}
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
