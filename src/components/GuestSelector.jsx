import React from "react";
import { theme, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { useToken } = theme;

const GuestSelector = ({ options, onGuestChange, maxPeoplePerRoom, className }) => {
  const { token } = useToken();

  const contentStyle = {
    padding: "15px",
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  return (
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <div style={contentStyle}>
            <div className="bg-secondary-50 flex flex-col">
              <GuestSection
                title="Room"
                value={options.room}
                onChange={(operation) => onGuestChange("room", operation)}
                disabledDecrement={
                  options.room <= 1 ||
                  options.room * maxPeoplePerRoom <=
                    options.adult + options.children
                }
                disabledIncrement={
                  options.room >= options.adult + options.children
                }
              />
              <GuestSection
                title="Adult"
                value={options.adult}
                onChange={(operation) => onGuestChange("adult", operation)}
                label="Ages 15 or above"
                disabledDecrement={options.adult <= 1 || options.adult === options.room}
                disabledIncrement={
                  options.room * maxPeoplePerRoom <=
                  options.adult + options.children
                }
              />
              <GuestSection
                title="Children"
                value={options.children}
                onChange={(operation) => onGuestChange("children", operation)}
                label="Ages 0-14"
                disabledDecrement={options.children <= 0}
                disabledIncrement={
                  options.room * maxPeoplePerRoom <=
                  options.adult + options.children
                }
              />
            </div>
          </div>
        )}
        className={className}
      >
        <div className="flex-1 justify-center lg:text-[18px] cursor-pointer">
          <Space size={"large"}>
            {`${options.room} Room . ${options.adult} Adult . ${
              options.children
            } ${options.children === 0 || options.children === 1 ? "Child" : "Children"}`}
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
  );
};

const GuestSection = ({
  title,
  value,
  onChange,
  label,
  disabledDecrement,
  disabledIncrement,
}) => {
  return (
    <div className="flex justify-between m-2 font-sans">
      <div className="flex flex-col">
        <span className="text-lg">{title}</span> 
        {label && <span className="text-md text-gray-50 font-normal">{label}</span>}
      </div>
      <div className="flex items-center gap-3">
        <button
          className={`text-xl flex items-center justify-center w-8 h-8 border-2 border-gray-30 rounded-full ${
            disabledDecrement ? "disabled:cursor-not-allowed disabled:border-secondary-300 disabled:text-secondary-300 duration-300" : ""
          }`}
          disabled={disabledDecrement}
          onClick={() => onChange("d")}
        >
          -
        </button>
        <span className="text-lg w-5">{value}</span>
        <button
          className={`text-xl flex items-center justify-center w-8 h-8 border-2 border-gray-30 rounded-full ${
            disabledIncrement ? "disabled:cursor-not-allowed disabled:border-secondary-300 disabled:text-secondary-300 duration-300" : ""
          }`}
          disabled={disabledIncrement}
          onClick={() => onChange("i")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { GuestSelector };
