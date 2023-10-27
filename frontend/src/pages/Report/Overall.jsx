import { Box, Divider, Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

//Dummy data

const timeData = [
  new Date(2023, 9, 1),
  new Date(2023, 9, 2),
  new Date(2023, 9, 3),
  new Date(2023, 9, 4),
  new Date(2023, 9, 5),
  new Date(2023, 9, 6),
  new Date(2023, 9, 7),
  new Date(2023, 9, 8),
  new Date(2023, 9, 9),
  new Date(2023, 9, 10),
  new Date(2023, 9, 11),
  new Date(2023, 9, 12),
  new Date(2023, 9, 13),
  new Date(2023, 9, 14),
  new Date(2023, 9, 15),
  new Date(2023, 9, 16),
  new Date(2023, 9, 17),
  new Date(2023, 9, 18),
  new Date(2023, 9, 19),
  new Date(2023, 9, 20),
  new Date(2023, 9, 21),
  new Date(2023, 9, 22),
  new Date(2023, 9, 23),
  new Date(2023, 9, 24),
  new Date(2023, 9, 25),
  new Date(2023, 9, 26),
  new Date(2023, 9, 27),
  new Date(2023, 9, 28),
  new Date(2023, 9, 29),
  new Date(2023, 9, 30),
];

const y = [
  18, 38, 40, 39, 10, 7, 31, 16, 34, 22, 27, 36, 22, 33, 50, 28, 23, 3, 24, 13,
  22, 34, 18, 39, 35, 1, 22, 3, 47, 15,
];

const config = {
  series: [
    {
      curve: "linear",
      data: y,
      showMark: false,
      label: "Số trang in",
      color: "#c94628",
    },
  ],
  height: 400,
};
const xAxisCommon = {
  data: timeData,
  scaleType: "time",
  // valueFormatter: (date) => {
  //   date.toLocaleDateString('fr-FR', { month:'numeric'});
  // },
};

const Overall = () => {

  return (
    <Box sx={{ m: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "1rem" }}>
          <b>Tổng quát</b>{" "}
        </p>
        <Grid
          container
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: "1rem" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Số lần in
            <span style={{ fontSize: "1.2rem" }}>
              <b>123</b>
            </span>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Số trang in
            <span style={{ fontSize: "1.2rem" }}>
              <b>123</b>
            </span>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Số máy được sử dụng
            <span style={{ fontSize: "1.2rem" }}>
              <b>123/123</b>
            </span>
          </Box>
        </Grid>
        <Divider sx={{ mt: 1 }} />
        <Box>
          In nhiều nhất:
          <br />
          In ít nhất:
          <br />
          Sử dụng nhiều giấy nhất: <br />
          Sử dụng ít giấy nhất:
        </Box>
        <Divider sx={{ mt: 1 }} />
        <Grid
          container
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: "1rem" }}
        >
          <Box sx={{ flex: 1, maxWidth: 800 }}>
            Số lần in
            <Box>
              <LineChart
                xAxis={[
                  {
                    ...xAxisCommon,
                    tickMinStep: 3600 * 1000 * 24,
                  },
                ]}
                {...config}
              />
            </Box>
          </Box>
          <Box sx={{ flex: 1, maxWidth: 800 }}>
            Số trang in
            <Box>
              <LineChart
                xAxis={[
                  {
                    ...xAxisCommon,
                    tickMinStep: 3600 * 1000 * 24,
                  },
                ]}
                {...config}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: "1rem" }}
        >
          <Box sx={{ flex: 1 }}>
            In trắng đen và in màu
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "In trắng đen" },
                    { id: 1, value: 15, label: "In màu" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            In 1 mặt và in 2 mặt
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "In trắng đen" },
                    { id: 1, value: 15, label: "In màu" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
export default Overall;
