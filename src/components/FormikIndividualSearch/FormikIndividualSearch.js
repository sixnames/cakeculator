import React from "react";
import { Form, Formik } from "formik";
import FormikSearch from "../FormikSearch/FormikSearch";
import * as PropTypes from "prop-types";

function FormikIndividualSearch({ onSubmit }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={({ query }) => onSubmit(query)}>
      <Form>
        <FormikSearch/>
      </Form>
    </Formik>
  );
}

FormikIndividualSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormikIndividualSearch;
