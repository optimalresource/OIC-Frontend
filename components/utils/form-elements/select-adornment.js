import { Icon, InlineIcon } from "@iconify/react";
import React from "react";

const SelectAdornment = ({
  isError = false,
  error = "",
  isFullWidth = true,
  width = "250px",
  height = "50px",
  rounded = "4px",
  borderWidth = "1px",
  borderStyle = "solid",
  borderColor = "#E6E6E6",
  showLabel = true,
  label = "Sample Label",
  important = true,
  className,
  selected = "",
  ...otherProps
}) => {
  console.log(isError);
  return (
    <div
      className={`flex flex-col  ${className}`}
      style={{
        width: isFullWidth ? "100%" : width,
      }}
    >
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
      >
        <input
          type="text"
          {...otherProps}
          className={`w-[90%] border-0 outline-0 h-[${height}] rounded-[${rounded}] px-3 bg-[#fff]`}
          value={selected}
          disabled
        />
        <InlineIcon icon="akar-icons:chevron-down" className="flex-1" />
      </div>

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
    </div>
  );
};

export default SelectAdornment;
