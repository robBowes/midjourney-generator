import { useState } from "react"
import { Field, Form } from "react-final-form"
import { TextField } from "./fields/TextField"
import Button from "@mui/material/Button"
import { Checkbox } from "./fields/Checkbox"
import { Select } from "./fields/Select"
import { Box } from "@mui/system"

type MidjoyrneyInputs = {
  mainIdea: string
  byArtist: boolean
  artistName: string
  style: string
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

    const propmt = `${mainIdea}${parts && "::" + parts} ${flags}`
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
              <TextField name='mainIdea' label='Main Idea' required />
            </div>
            <Box my={2}>
              <Select
                name='artistName'
                label='Artist Name'
                options={[
                  { value: "" },
                  { value: "Hiroshige" },
                  { value: "Hokusai" },
                ]}
              />
            </Box>
            <Box my={2}>
              <Select
                name='style'
                label='Style'
                options={[
                  { value: "" },
                  { value: "Steampunk" },
                  { value: "Digital art" },
                ]}
              />
            </Box>
            <div>
              <Checkbox name='test' label='Use beta features' />
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
