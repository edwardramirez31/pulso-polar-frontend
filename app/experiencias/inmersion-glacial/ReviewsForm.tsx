import { Field, Form, Formik } from 'formik';
import StarRating from './StarRatingField';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import Alert from '@/src/components/ui/Alert';
import { Dispatch, SetStateAction, useState } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  rate: Yup.number().min(0).max(5).required('La calificación es requerida'),
  email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es requerido'),
  picture: Yup.object().shape({
    file: Yup.mixed().required('La imagen es requerida'),
    fileName: Yup.string().required('El archivo es requerido')
  }),
  review: Yup.string().required('La reseña es requerida')
});

interface Props {
  setShowReviewsForm: Dispatch<SetStateAction<boolean>>;
}

export default function ReviewsForm({setShowReviewsForm}: Props) {
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
        description="Reseña enviada exitosamente!"
      />
    );
  } else {
    alert = (
      <Alert
        show={showAlert}
        setShow={setShowAlert}
        success={false}
        title="Error interno"
        description="La reseña no pudo ser enviada, intenta nuevamente."
      />
    );
  }

  return (
    <Formik
      initialValues={{
        name: '',
        rate: '',
        email: '',
        picture: {file: '', fileName: ''},
        review: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit({nombre: values.name, email: values.email, reseña: values.review, calificacion: values.rate, picture: values.picture.file});
        // alert(JSON.stringify(values, null, 2));
        setShowAlert((prevState) => !prevState);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        setFieldValue,
      }) => {
        return (
          <Form className="space-y-6 px-2 lg:px-32" id="review-form">
            <div className="bg-white shadow px-4 lg:py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Escribe tu reseña
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Comparte con todos cómo estuvo tu experiencia!
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="space-y-6 mb-2">
                    <div className="">
                      <div className="w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombre
                        </label>
                        <Field
                          required
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="address-level2"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Correo
                        </label>
                        <Field
                          required
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="address-level2"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                        />
                      </div>
                    </div>

                    <StarRating setRate={(value: number) => { setFieldValue('rate', value) }} />
                    {errors.rate && touched.rate && (<span className="text-red-600">{errors.rate}</span>)}

                    <div>
                      <label
                        htmlFor="review"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reseña
                      </label>
                      <div className="mt-1">
                        <Field
                          required
                          as="textarea"
                          id="review"
                          name="review"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md text-gray-900"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Comparte tu experiencia acerca de este servicio
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Foto de la experiencia
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="text-sm text-center text-gray-600">
                            <label
                              htmlFor="picture"
                              className="text-center relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Carga un archivo</span>
                              <input
                                required
                                id="picture"
                                name="picture"
                                type="file"
                                className="sr-only"
                                onChange={(e) => {
                                  if (e.target.files) {
                                    let reader = new FileReader();
                                    let file = e.target.files[0]!;
                                    reader.onloadend = () => {
                                      setFieldValue('picture', {file: reader.result, fileName: e.target.value.split('\\')[2]});
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                                onBlur={handleBlur}
                                // accept="image/*"
                              />
                            </label>
                            {/* <p className="pl-1">o arrastra aquí</p> */}
                          </div>
                          <p className="text-xs text-gray-500">
                            { values.picture.fileName || 'PNG, JPG, GIF de hasta 10MB'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              {alert}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setShowReviewsForm((prevState) => !prevState)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
