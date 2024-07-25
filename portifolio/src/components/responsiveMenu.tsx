import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { HeaderItemComponent } from "./header";
import { IoMdMenu } from "react-icons/io";

type Anchor = "right";

export default function ResponsiveMenuComponent() {
  const [selectedItem, setSelectedItem] = React.useState("Home");
  const [state, setState] = React.useState({
    right: false,
  });

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, background: "#0a0a0a", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "Projects", "Contact"].map((text, _index) => (
          <ListItem key={text}>
            <HeaderItemComponent
              href={`/${text.toLowerCase()}`}
              text={text}
              selected={text === selectedItem}
              onClick={() => handleItemClick(text)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        {" "}
        <IoMdMenu size={24} color="#4338ca" />{" "}
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
