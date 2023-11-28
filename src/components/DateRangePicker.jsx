import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const disabledDate = (current) => {
  return current && current < dayjs().endOf('day');
}
const showDateFormat = "DD MMM YYYY";

const DateRangePicker = ({ date, onChange, className }) => {
  return (    
      <RangePicker
        disabledDate={disabledDate}
        value={date}
        format={showDateFormat}
        onChange={onChange}
        className={className}
      />
  );
};

export { DateRangePicker };
