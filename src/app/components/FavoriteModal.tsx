"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type FavoriteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: { nameCustom: string; description: string }) => void;
};

export default function FavoriteModal({ isOpen, onClose, onSubmit }: FavoriteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    nameCustom: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    description: Yup.string()
      .min(5, "La descripción debe tener al menos 5 caracteres")
      .required("La descripción es obligatoria"),
  });

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
          <h2 className="text-lg font-semibold text-black mb-4 text-center">Agregar a Favoritos</h2>
          <Formik
            initialValues={{ nameCustom: "", description: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              setIsSubmitting(true);
              await onSubmit(values);
              setIsSubmitting(false);
              onClose();
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm text-black font-medium">Nombre personalizado</label>
                  <Field
                    name="nameCustom"
                    className="border p-2  text-black rounded w-full"
                    placeholder="Ej: Pikachu <3"
                  />
                  <ErrorMessage
                    name="nameCustom"
                    component="p"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm text-black font-medium">Descripción</label>
                  <Field
                    name="description"
                    as="textarea"
                    className="border p-2 text-black rounded w-full"
                    placeholder="Ej: Favorito..."
                  />
                  <ErrorMessage
                    name="description"
                    component="p"
                    className="text-red-600 text-xs mt-1"
                  />
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-1 bg-gray-500 hover:bg-gray-400 rounded-md "
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 rounded-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Guardando..." : "Agregar"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Dialog>
  );
}
