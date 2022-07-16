import { Field } from "react-final-form"
import { BaseFieldProps } from "./types"
import { default as MUICheckbox } from "@mui/material/Checkbox"
import { FormControlLabel } from "@mui/material"

export const Checkbox = ({ label, name, required }: BaseFieldProps) => {
  return (
    <Field<boolean>
      name={name}
      render={({ input }) => (
        <FormControlLabel
          control={
            <MUICheckbox checked={input.checked} onChange={input.onChange} />
          }
          label={label}
        />
      )}
    />
  )
}
