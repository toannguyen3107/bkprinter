import { Box, Divider, Grid, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const ReportNav = ({ option, reportDate, startDate, endDate}) => {
  const { sOverall, sDetails } = option;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Stack direction="row" spacing={2} display="flex" alignItems="center">
          {sOverall && (
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#1976d2",
                    }
                  : { color: "#000" }
              }
              to="overall"
            >
              Tổng thể
            </NavLink>
          )}
          {sDetails && (
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#1976d2",
                    }
                  : { color: "#000" }
              }
              to="details"
              // isActive={!sOverall}
            >
              Chi tiết
            </NavLink>
          )}
        </Stack>
        <p style={{ marginLeft: "auto", color: "#636363", fontSize: "13px" }}>
          Thời gian tạo: {reportDate.toLocaleString("en-GB")}
        </p>
      </Grid>
      <Divider sx={{ mt: 1 }} />
      <Box sx={{ textAlign: "center", fontWeight: "500" }}>
        <p>
          Báo cáo hoạt động từ {startDate.toLocaleDateString("en-GB")} đến{" "}
          {endDate.toLocaleDateString("en-GB")}
        </p>
      </Box>
    </Box>
  );
};
export default ReportNav;
