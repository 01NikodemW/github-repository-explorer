import { Box, TextField, styled } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  backgroundColor: "#fff",
  width: "900px",
  height: "700px",

  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    marginLeft: "16px",
    marginRight: "16px",
  },
}));

export const SearchSectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  marginBottom: "16px",

  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
    gap: "8px",
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  backgroundColor: "#f2f2f2",
}));
