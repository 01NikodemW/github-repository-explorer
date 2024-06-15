import { rem } from "@/utils/px-to-rem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton,
  styled,
} from "@mui/material";

export const StyledAccordion = styled(Accordion)(() => ({
  marginBottom: "16px",
  boxShadow: "none",
}));

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  backgroundColor: "#f2f2f2",
  fontSize: rem(20),
  fontWeight: "bold",
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  padding: 0,
  paddingLeft: "16px",
  marginTop: "16px",
  overflow: "auto",
  maxHeight: "300px",
}));

export const RepositoryLoaderSkeleton = styled(Skeleton)(() => ({
  width: "100%",
  height: "56px",
}));
