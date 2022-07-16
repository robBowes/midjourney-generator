import { useState } from "react"
import { Field, Form } from "react-final-form"
import { TextField } from "./fields/TextField"
import Button from "@mui/material/Button"
import { Checkbox } from "./fields/Checkbox"

type MidjoyrneyInputs = {
  mainIdea: string
  byArtist: boolean
  artistName: string
  test: boolean
}

export const MidjourneyForm = () => {
  const [midjourneyPrompt, setMidjourneyPrompt] = useState("")

  const onSubmit = ({
    mainIdea,
    test,
    artistName,
    byArtist,
  }: MidjoyrneyInputs) => {
    console.log(test)
    const flags = [test && "--test"].filter(Boolean).join("")
    const parts = [artistName && `painting by ${artistName}`]
      .filter(Boolean)
      .join("::")
    const propmt = `${mainIdea}${parts} ${flags}`
    setMidjourneyPrompt(propmt)
    navigator.clipboard.writeText(propmt)
  }

  return (
    <div>
      <Form<MidjoyrneyInputs>
        onSubmit={onSubmit}
        initialValues={{ mainIdea: "" }}
        render={({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='mainIdea'></label>
              <TextField name='mainIdea' label='Main Idea' required />
            </div>
            <div>
              <div>
                <label htmlFor='byArtist'>By artist:</label>
                <Field<string>
                  component='select'
                  name='artistName'
                  id='mainIdea'
                >
                  <option />
                  <option value='Hiroshige'>Hiroshige</option>
                </Field>
              </div>
            </div>
            <div>
              <Checkbox name='test' label='Test' />
            </div>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </form>
        )}
      />
      <div>{midjourneyPrompt}</div>
    </div>
  )
}
