'use client';
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import Alert from '@/src/components/ui/Alert';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
});

export default function Newsletter() {
  const [formState, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_CONTACT_FORM_ID ?? ''
  );
  const [showAlert, setShowAlert] = useState(false);

  let alert: JSX.Element;

  if (formState.succeeded) {
    alert = (
      <Alert
        show={showAlert}
        setShow={setShowAlert}
        success
        title="Éxito!"
        description="Correo guardado exitosamente!"
      />
    );
  } else {
    alert = (
      <Alert
        show={showAlert}
        setShow={setShowAlert}
        success={false}
        title="Error interno"
        description="El correo no pudo ser enviado, intenta nuevamente."
      />
    );
  }

  return (
    <div className="bg-white py-5 sm:py-10">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20 mb-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Suscríbete a nuestro Newsletter.
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                  Recibe las últimas noticias y actualizaciones de Pulso Polar.
                  Ofertas exclusivas, guías practicas de desarrollo integral,
                  nuevos servicios y excursiones.
                </p>
              </div>
              <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await handleSubmit({
                    descripcion: `${values.email} se ha suscrito al newsletter`,
                    email: values.email,
                  });
                  // alert(JSON.stringify(values, null, 2));
                  setShowAlert((prevState) => !prevState);
                  resetForm();
                }}
              >
                <Form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Correo
                    </label>
                    <Field
                      required
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      placeholder="Tu correo"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                    >
                      Suscribirse
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          {alert}
        </div>
      </div>
    </div>
  );
}
