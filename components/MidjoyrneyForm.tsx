import { useState } from "react"
import { Field, Form } from "react-final-form"

type MidjoyrneyInputs = { mainIdea: string }

export const MidjourneyForm = () => {
  const [midjourneyPrompt, setMidjourneyPrompt] = useState("")

  const onSubmit = ({ mainIdea }: MidjoyrneyInputs) => {
    setMidjourneyPrompt(mainIdea)
  }
  return (
    <div>
      <Form<MidjoyrneyInputs>
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field component='input' name='mainIdea' />
            <button type='submit'>Submit</button>
          </form>
        )}
      />
      <div>{midjourneyPrompt}</div>
    </div>
  )
}
