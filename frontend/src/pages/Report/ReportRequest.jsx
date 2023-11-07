import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, Outlet } from "react-router-dom";
import ReportNav from "./ReportNav";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

const ReportRequest = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [option, setOption] = useState("lastWeek");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [controlledStartDate, setControlledStartDate] = useState(null);
  const [controlledEndDate, setControlledEndDate] = useState(null);
  useEffect(() => {
    setEndDate(dayjs());
    const newStart = dayjs();
    newStart.subtract(7, 'd')
    newStart.hour(0);
    newStart.minute(0);
    newStart.second(0);
    setStartDate(newStart);
  }, []);

  const handleOption = (event) => {
    const newOption = event.target.value;
    setOption(newOption);
  };

  const [reportOption, setReportOption] = useState({
    overall: true,
    details: false,
  });

  const { overall, details } = reportOption;
  const error = [overall, details].filter((v) => v).length === 0;

  const handleReportOption = (event) => {
    setReportOption({
      ...reportOption,
      [event.target.name]: event.target.checked,
    });
  };

  const [reportDate, setReportDate] = useState(null);

  const [sOverall, setSOverall] = useState(null);
  const [sDetails, setSDetails] = useState(null);

  const handleSubmit = () => {
    if (option === "lastWeek") {
      const newEnd = dayjs().endOf("d");
      setEndDate(newEnd);
      const newStart = dayjs().subtract(7, "d").startOf("d");
      setStartDate(newStart);
      console.log(newStart);
    }
    if (option === "lastMonth") {
      const newEnd = dayjs().endOf('d');
      setEndDate(newEnd);
      const newStart = dayjs().subtract(30, "d").startOf('d');
      setStartDate(newStart);
    }
    if (option === "custom") {
      const newEnd = dayjs(controlledEndDate).endOf("d");
      setEndDate(newEnd);
      const newStart = dayjs(controlledStartDate).startOf("d");
      setStartDate(newStart);
    }
    handleClose();
    setReportDate(dayjs().format('DD/MM/YYYY hh:mm:ss A'));
    setSOverall(overall);
    setSDetails(details);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} disableElevation>
        Tạo báo cáo mới
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Báo cáo</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="time-range">Thời gian</FormLabel>
            <RadioGroup
              aria-labelledby="time-range"
              name="controlled-radio-buttons-group"
              value={option}
              onChange={handleOption}
              defaultValue="lastWeek"
            >
              <FormControlLabel
                value="lastWeek"
                control={<Radio />}
                label="7 ngày gần nhất"
              />
              <FormControlLabel
                value="lastMonth"
                control={<Radio />}
                label="30 ngày gần nhất"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Tùy chọn"
              />
              {option === "custom" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Ngày bắt đầu"
                      value={controlledStartDate}
                      onChange={(newValue) => { setControlledStartDate(newValue)}}
                    />
                    <DatePicker
                      label="Ngày kết thúc"
                      value={controlledEndDate}
                      onChange={(newValue) => setControlledEndDate(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
            </RadioGroup>
          </FormControl>
          <FormControl
            required
            error={error}
            component="fieldset"
            variant="standard"
            defaultValue="overall"
          >
            <FormLabel component="legend">Định dạng</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={overall}
                    onChange={handleReportOption}
                    name="overall"
                  />
                }
                label="Tạo báo cáo tổng thể"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={details}
                    onChange={handleReportOption}
                    name="details"
                  />
                }
                label="Tạo báo cáo chi tiết"
              />
            </FormGroup>
            {error && <FormHelperText>Chọn định dạng báo cáo</FormHelperText>}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button variant="contained" onClick={handleSubmit}>
            <Box>
              <Link to={overall ? "overall" : "details"}>
                {" "}
                <span style={{ color: "white" }}>Tạo báo cáo</span>
              </Link>
            </Box>
          </Button>
        </DialogActions>
      </Dialog>
      {reportDate && (
        <Box
          sx={{ backgroundColor: "#fff", width: "100%", height: "100%", mt: 1 }}
        >
          <ReportNav
            option={{ sOverall, sDetails }}
            reportDate={reportDate}
            startDate={startDate.$d}
            endDate={endDate.$d}
          />
          <Outlet />
        </Box>
      )}
    </div>
  );
};
export default ReportRequest;
