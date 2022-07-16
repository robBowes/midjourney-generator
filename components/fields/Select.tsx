import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material"
import { configOptions } from "final-form"
import { Field } from "react-final-form"
import { BaseFieldProps } from "./types"

interface SelectProps extends BaseFieldProps {
  options: { label?: string; value: string }[]
}

export const Select = ({ name, label, options }: SelectProps) => {
  return (
    <Field
      name={name}
      render={({ input }) => (
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
          <MUISelect
            labelId='demo-simple-select-label'
            id={name}
            value={input.value}
            label={label}
            onChange={input.onChange}
          >
            {options.map((option) => (
              <MenuItem value={option.value}>
                {option.label || option.value}
              </MenuItem>
            ))}
          </MUISelect>
        </FormControl>
      )}
    />
  )
}
