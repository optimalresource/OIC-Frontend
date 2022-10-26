import { Icon, InlineIcon } from "@iconify/react";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import React, { useState } from "react";
import ClickAwayListener from "../ClickAwayListener";

const SelectAdornment = ({
  isError = false,
  error = "",
  isFullWidth = true,
  width = "250px",
  height = 50,
  rounded = "4px",
  borderWidth = "1px",
  borderStyle = "solid",
  borderColor = "#E6E6E6",
  showLabel = true,
  label = "Sample Label",
  important = true,
  className,
  selected = "",
  defaultValue = "",
  setValue = () => {},
  items = [],
  ...otherProps
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [inputSelected, setInputSelected] = useState(defaultValue);
  const triggerSetValue = (value) => {
    setInputSelected(value);
    setValue(value);
    setToggleDropdown(false);
  };
  return (
    <div
      className={`flex flex-col  ${className} relative`}
      style={{
        width: isFullWidth ? "100%" : width,
      }}
    >
      <ClickAwayListener onClickAway={() => setToggleDropdown(false)}>
        {showLabel && (
          <div className="flex pb-3">
            {label} {important && <span className="text-[red] pl-1">*</span>}
          </div>
        )}
        <div
          style={{
            width: isFullWidth ? "100%" : width,
            borderRadius: rounded,
            borderWidth,
            borderStyle,
            borderColor: isError ? "red" : borderColor,
          }}
          className="flex items-center justify-between bg-[#fff]"
          onClick={() => setToggleDropdown(true)}
        >
          <input
            type="text"
            {...otherProps}
            className={`w-[90%] border-0 outline-0 h-[${height}px] rounded-[${rounded}] px-3 bg-[#fff]`}
            value={inputSelected ?? defaultValue}
            disabled
          />
          <InlineIcon icon="akar-icons:chevron-down" className="flex-1" />
        </div>

        {toggleDropdown && (
          <div
            className={`absolute w-[100%] bg-[#fff] top-[50px] z-[200] shadow-[0px_1px_1px_1px_rgba(5,16,55,0.15)] rounded-[6px]`}
            style={{
              top: "90px",
            }}
          >
            <ul className="h-[150px] overflow-y-scroll">
              {items.map((item, index) => {
                return (
                  <li
                    className="m-1 py-2 px-3 hover:bg-[#0B508F] rounded-[6px] hover:text-white flex items-center"
                    onClick={() => triggerSetValue(item)}
                    key={index}
                  >
                    <span className="w-[30px]">
                      {inputSelected === item ? (
                        <Icon icon="akar-icons:check" />
                      ) : (
                        " "
                      )}
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="flex text-[red] text-sm py-2 items-center">
          {isError ? (
            <>
              <Icon icon="akar-icons:triangle-alert" />{" "}
              <span className="pl-2">{error}</span>
            </>
          ) : (
            <span className="pl-2">&nbsp;</span>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default SelectAdornment;
