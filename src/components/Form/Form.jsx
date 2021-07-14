import React from "react"
import {FormRenderer, componentTypes, validatorTypes } from "@data-driven-forms/react-form-renderer"
import { componentMapper, FormTemplate } from "@data-driven-forms/mui-component-mapper"

const validatorMapper = {
  "same-email": () => (value, allValues) => (value !== allValues.email ? "Email does not match" : undefined),
}

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "name",
      label: "Your name",
      isRequired: true,
      validate: [{ type: validatorTypes.REQUIRED }],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "email",
      label: "Email",
      isRequired: true,
      validate: [
        { type: validatorTypes.REQUIRED },
        {
          type: validatorTypes.PATTERN,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          message: "Not valid email",
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "confirm-email",
      label: "Confirm email",
      type: "email",
      isRequired: true,
      validate: [{ type: "same-email" }],
    },
    {
      component: componentTypes.CHECKBOX,
      name: "newsletters",
      label: "I want to receive newsletter",
    },
  ],
}

const Form = () => (
  <FormRenderer
    schema={schema}
    componentMapper={componentMapper}
    FormTemplate={FormTemplate}
    onSubmit={console.log}
    validatorMapper={validatorMapper}
  />
)

export default Form
