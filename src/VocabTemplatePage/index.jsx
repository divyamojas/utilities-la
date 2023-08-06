import {
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import "./index.css";
import { useState } from "react";

const VocabTemplatePage = () => {
  const [form, setForm] = useState({
    word: "",
  });

  return (
    <Card className="">
      <Container>
        <form action="">
          <FormControl>
            <Stack className="">
              <InputLabel htmlFor=""></InputLabel>
              <Input id="" />
            </Stack>
          </FormControl>
          <Button>Submit</Button>
        </form>
      </Container>
    </Card>
  );
};

export default VocabTemplatePage;
