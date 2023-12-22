import { BadgeOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormLabel,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

const mdDown = "@media (max-width: 899px)";

const CustomFormControl = ({ label, id, required, endIcon }) => (
  <Box width="100%">
    <FormLabel sx={{ color: "var(--black)", mb: ".3rem", display: "block" }} htmlFor={id} {...{ required }}>
      {label}
    </FormLabel>
    <InputBase
      id={id}
      className="bg-light"
      sx={{ width: "100%", padding: ".7rem .4rem", "& .MuiInputBase-input": { paddingInline: ".3rem" } }}
      endAdornment={endIcon}
    />
  </Box>
);

const Contact = () => {
  return (
    <main style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
      <Container>
        <Grid container spacing="2rem" pb="5rem" mt="0">
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  textAlign: "center",
                },
              }}
            >
              <Typography color="var(--accent)" mb=".3rem" variant="h2" fontWeight="500" component="h1">
                About us
              </Typography>

              <Typography sx={{ letterSpacing: ".05em", lineHeight: "1.7" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s.
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                [mdDown]: {
                  marginInline: "auto",
                  width: "min(90vw, 22rem)",
                },
              }}
            >
              <Card>
                <CardContent>
                  <Stack spacing="1rem">
                    {/* Name */}
                    <Stack direction="row" spacing=".5rem">
                      <CustomFormControl label="First name" id="firstName" required endIcon={<BadgeOutlined />} />
                      <CustomFormControl label="Last name" id="lastName" />
                    </Stack>

                    {/* Email */}
                    <CustomFormControl label="Email" id="email" required />

                    {/* Message Content */}
                    <CustomFormControl label="What can we help you with?" id="MessageContent" required />

                    {/* Submit Button */}
                    <Box pt="1rem" width="100%">
                      <Button variant="contained" sx={{ paddingInline: "3rem", [mdDown]: { width: "100%" } }}>
                        Send
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Contact;
