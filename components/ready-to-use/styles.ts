import { Box, Button, styled } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  backgroundColor: "#e5e5e5",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledLanguageButton = styled(Button)(() => ({
  position: "absolute",
  right: 0,
  top: 0,
  borderRadius: 0,
  backgroundColor: "#212121",

  "&:hover": {
    backgroundColor: "#212121",
  },
}));
