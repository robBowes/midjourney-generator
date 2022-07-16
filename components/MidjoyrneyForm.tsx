import { useState } from "react"
import { Field, Form } from "react-final-form"
import TextField from "@mui/material/TextField"

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
    const propmt = `${mainIdea}::${parts} ${flags}`
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
              <Field<string>
                name='mainIdea'
                render={({ input }) => (
                  <TextField
                    label='Main Idea'
                    variant='standard'
                    id='mainIdea'
                    value={input.value}
                    onChange={input.onChange}
                    required
                  />
                )}
                validate={(value) => (!value ? "required" : undefined)}
              />
            </div>
            <div>
              <div>
                <label htmlFor='byArtist'>By artist:</label>

                <Field<string>
                  component='select'
                  name='artistName'
                  id='mainIdea'
                  validate={(value) => (!value ? "required" : undefined)}
                >
                  <option />
                  <option value='Hiroshige'>Hiroshige</option>
                </Field>
              </div>
            </div>
            <div>
              <label htmlFor='test'>Test</label>
              <Field component='input' type='checkbox' name='test' id='test' />
            </div>
            <button type='submit'>Submit</button>
          </form>
        )}
      />
      <div>{midjourneyPrompt}</div>
    </div>
  )
}
