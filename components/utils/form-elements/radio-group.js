import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { GenerateRandomString } from "../GenerateRandomString";

const RadioGroup = ({
  flexDirection = "flex-row",
  isFullWidth = true,
  width,
  showLabel = true,
  className,
  label = "Sample Label",
  important = true,
  items = [],
  isError = false,
  error = "Please check error",
  defaultValue = "",
  focus = false,
  setValue = () => {},
}) => {
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
        className={`flex gap-5 ${
          flexDirection === "flex-row"
            ? "flex-row items-center"
            : "flex-col justify-center"
        }`}
      >
        {items.map((item, index) => {
          return (
            <div
              className={`flex items-center gap-2 ${
                isError ? "text-[red]" : ""
              }`}
              onClick={() => {
                setValue(item);
              }}
              key={index}
            >
              <Icon
                icon={
                  defaultValue === item
                    ? "fluent:radio-button-20-filled"
                    : "fluent:radio-button-20-regular"
                }
              />
              <label className="mr-2">{item}</label>
            </div>
          );
        })}
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

export default RadioGroup;
