import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

const Details = () => {
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");
  const [location, setLocation] = useState();
  const [id, setId] = useState();
  const [usage, setUsage] = useState();
  const [page, setPage] = useState();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleClick = () => {
    if (!options.includes(option)) {
      const newOptions = [...options, option];
      setOptions(newOptions);
    }
  };

  const handleDelete = (event) => {
    const newOptions = options.filter((e) => e !== event.target.value);
    setOptions(newOptions);
  }

  return (
    <Box sx={{ m: 1, height: "100vh" }}>
      <Box>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            mb: 2,
          }}
        >
          <div>
            <InputLabel id="demo-simple-select-helper-label">Lọc</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={option}
              label="option"
              onChange={handleChange}
              sx={{ width: 180, height: 50 }}
            >
              <MenuItem value="id">Mã máy in</MenuItem>
              <MenuItem value="location">Vị trí</MenuItem>
              <MenuItem value="usage">Số lần sử dụng</MenuItem>
              <MenuItem value="page">Số trang sử dụng</MenuItem>
            </Select>
          </div>
          <Button variant="contained" disableElevation onClick={handleClick}>
            + Điều kiện
          </Button>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {options.includes("id") && (
          <Grid
            item 
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              Mã máy in
            </Box>
            <input type="text" style={{ height: "40px", width: "80px" }} />
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={handleDelete}
                value='id'
              >
                X
              </button>
            </Box>
          </Grid>
        )}
        {options.includes("location") && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              Vị trí
            </Box>
            <input type="text" style={{ height: "40px", width: "80px" }} />
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={handleDelete}
                value='location'
              >
                X
              </button>
            </Box>
          </Grid>
        )}
        {options.includes("usage") && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              Số lần sử dụng
            </Box>
            <input
              type="text"
              style={{ height: "40px", width: "80px" }}
              placeholder="Từ"
            />
            <input
              type="text"
              style={{ height: "40px", width: "80px" }}
              placeholder="Đến"
            />
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={handleDelete}
                value='usage'
              >
                X
              </button>
            </Box>
          </Grid>
        )}
        {options.includes("page") && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              Số trang sử dụng
            </Box>
            <input
              type="text"
              style={{ height: "40px", width: "80px" }}
              placeholder="Từ"
            />
            <input
              type="text"
              style={{ height: "40px", width: "80px" }}
              placeholder="Đến"
            />
            <Box
              sx={{
                backgroundColor: "#1667c2",
                color: "#fff",
                p: 1,
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={handleDelete}
                value='page'
              >
                X
              </button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
export default Details;
