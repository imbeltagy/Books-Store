"use client";

import { ArrowForwardIosSharp } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

const questions = [
  {
    summary: "Collapsible Group Item",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Collapsible Group Item",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Collapsible Group Item",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    summary: "Collapsible Group Item",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const CustomAccordion = ({ summary, content, id, expanded, handleChange }) => (
  <Accordion
    disableGutters
    elevation={0}
    sx={{
      border: `1px solid #0008`,
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
    }}
    expanded={expanded === id}
    onChange={handleChange(id)}
  >
    <AccordionSummary
      expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
      className="bg-light"
      sx={{
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
          marginLeft: ".5rem",
        },
      }}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Typography>{summary}</Typography>
    </AccordionSummary>
    <AccordionDetails id={`${id}-content`}>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

const FAQs = () => {
  const [expanded, setExpanded] = useState("q1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return questions.map(({ summary, content }, i) => {
    const id = `q${i + 1}`;
    return <CustomAccordion {...{ summary, content, id, expanded, handleChange }} />;
  });
};

export default FAQs;
