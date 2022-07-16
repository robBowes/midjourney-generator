import { Field } from "react-final-form"
import { default as MUITextField } from "@mui/material/TextField"
import { BaseFieldProps } from "./types"

interface TextFieldProps extends BaseFieldProps {
  name: string
  label: string
  required?: boolean
}

export const TextField = ({ name, label, required }: TextFieldProps) => {
  return (
    <Field<string>
      name={name}
      render={({ input }) => (
        <MUITextField
          label={label}
          variant='standard'
          id={name}
          value={input.value}
          onChange={input.onChange}
          required={required}
        />
      )}
      validate={(value) => (!value && required ? "required" : undefined)}
    />
  )
}
