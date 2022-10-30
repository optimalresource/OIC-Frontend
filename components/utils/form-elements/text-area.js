import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { GenerateRandomString } from "../GenerateRandomString";

const TextAreaComponent = ({
  type = "text",
  isError = false,
  error = "",
  isFullWidth = true,
  width = "250px",
  height = "200px",
  rounded = "4px",
  borderWidth = "1px",
  borderStyle = "solid",
  borderColor = "#E6E6E6",
  showLabel = true,
  label = "Sample Label",
  important = true,
  className,
  defaultValue = "",
  disabled = false,
  children,
  setValue = () => {},
  focus = false,
  ...otherProps
}) => {
  const [inputSelected, setInputSelected] = useState(defaultValue);
  const triggerSetValue = (value) => {
    setInputSelected(value);
    setValue(value);
  };
  const [id, setId] = useState(GenerateRandomString(10));
  useEffect(() => {
    if (focus) {
      const handleClickScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      handleClickScroll();
    }
  }, [focus, id]);

  return (
    <div
      className={`flex flex-col  ${className}`}
      style={{
        width: isFullWidth ? "100%" : width,
      }}
      id={id}
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
      >
        <textarea
          type={type}
          {...otherProps}
          className={`w-[100%] border-0 outline-0 h-[${height}] rounded-[${rounded}] px-3`}
          onChange={(e) => triggerSetValue(e.target.value)}
          value={inputSelected.length > 1 ? inputSelected : defaultValue}
          disabled={disabled}
        ></textarea>
      </div>

      <div className="flex text-[red] text-sm py-2 items-center">
        {isError ? (
          <>
            <Icon icon="akar-icons:triangle-alert" />{" "}
            <span className="pl-2">{error}</span>
          </>
        ) : (
          <span className="pl-2 flex gap-2 items-center text-[#333]">
            {children}&nbsp;
          </span>
        )}
      </div>
    </div>
  );
};

export default TextAreaComponent;
