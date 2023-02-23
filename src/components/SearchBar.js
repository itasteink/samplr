import * as React from "react";
import { Pane, TextInput, Button } from "evergreen-ui";

export const SearchBar = (props) => {
  return (
    <Pane display="flex" padding={16}>
      <TextInput width="100%" height={48} placeholder="enter something here." />
      <Button height={48} appearance="primary" marginLeft={16}>
        Big Button
      </Button>
    </Pane>
  );
};
