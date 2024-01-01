import { Box, Divider, Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useOutletContext } from "react-router-dom";

//Dummy data

const Overall = () => {
  const { data, freq, printer, location } = useOutletContext();

  const countConfig = {
    series: [
      {
        curve: "linear",
        data: freq.map((i) => i.count),
        showMark: false,
        label: "Số lần in",
        color: "#0792ce",
        scaleType: "time",
        valueFormatter: (date) => date.toString(),
      },
    ],
    height: 400,
  };

  const pageConfig = {
    series: [
      {
        curve: "linear",
        data: freq.map((i) => i.pages),
        showMark: false,
        label: "Số trang in",
        color: "#c94628",
      },
    ],
    height: 400,
  };

  const xAxisCommon = {
    data: freq.map((i) => new Date(i.date)),
    scaleType: "time",
    // valueFormatter: (date) => {
    //   date.toLocaleDateString('fr-FR', { month:'numeric'});
    // },
  };

  const totalBwPages = data.reduce((total, currentItem) => {
    return total + currentItem.bw.pages;
  }, 0);

  const totalColorPages = data.reduce((total, currentItem) => {
    return total + currentItem.color.pages;
  }, 0);

  const totalOfUsage = data.reduce((total, currentItem) => {
    return total + currentItem.totalUsage;
  }, 0);

  const totalOfPages = data.reduce((total, currentItem) => {
    return total + currentItem.totalPages;
  }, 0);

  const locationWithLowestPages = location.reduce(
    (minItem, currentItem) => {
      if (currentItem.pages < minItem.pages) {
        return { item: currentItem, pages: currentItem.pages };
      }
      return minItem;
    },
    { item: location[0], pages: location[0].pages }
  );

  const locationWithHighestPages = location.reduce(
    (minItem, currentItem) => {
      if (currentItem.pages > minItem.pages) {
        return { item: currentItem, pages: currentItem.pages };
      }
      return minItem;
    },
    { item: location[0], pages: location[0].pages }
  );

  const locationWithLowestUsage = location.reduce(
    (minItem, currentItem) => {
      if (currentItem.count < minItem.count) {
        return { item: currentItem, count: currentItem.count };
      }
      return minItem;
    },
    { item: location[0], count: location[0].count }
  );

  const locationWithHighestUsage = location.reduce(
    (minItem, currentItem) => {
      if (currentItem.count > minItem.count) {
        return { item: currentItem, count: currentItem.count };
      }
      return minItem;
    },
    { item: location[0], count: location[0].count }
  );

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
              <b>{totalOfUsage}</b>
            </span>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Số trang in
            <span style={{ fontSize: "1.2rem" }}>
              <b>{totalOfPages}</b>
            </span>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Số máy được sử dụng
            <span style={{ fontSize: "1.2rem" }}>
              <b>
                {data.length}/{printer}
              </b>
            </span>
          </Box>
        </Grid>
        <Divider sx={{ mt: 1 }} />
        <Box>
          In nhiều nhất:
          {" " +
            locationWithHighestUsage.item._id.building +
            " - " +
            locationWithHighestUsage.item._id.room +
            " (" +
            locationWithHighestUsage.item.count +
            " lần)"}
          <br />
          In ít nhất:
          {" " +
            locationWithLowestUsage.item._id.building +
            " - " +
            locationWithLowestUsage.item._id.room +
            " (" +
            locationWithLowestUsage.item.count +
            " lần)"}
          <br />
          Sử dụng nhiều giấy nhất:
          {" " +
            locationWithHighestPages.item._id.building +
            " - " +
            locationWithHighestPages.item._id.room +
            " (" +
            locationWithHighestPages.item.pages +
            " trang)"}
          <br />
          Sử dụng ít giấy nhất:
          {" " +
            locationWithLowestPages.item._id.building +
            " - " +
            locationWithLowestPages.item._id.room +
            " (" +
            locationWithLowestPages.item.pages +
            " trang)"}
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
                {...countConfig}
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
                {...pageConfig}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          sx={{ flexDirection: { xs: "column", md: "row" }, gap: "1rem" }}
        >
          <Box sx={{ flex: 1 }}>
            In trắng đen và in màu (trang)
            <PieChart
              colors={["#0792ce", "#c94628"]}
              series={[
                {
                  data: [
                    { id: 0, value: totalBwPages, label: "In trắng đen" },
                    { id: 1, value: totalColorPages, label: "In màu" },
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
