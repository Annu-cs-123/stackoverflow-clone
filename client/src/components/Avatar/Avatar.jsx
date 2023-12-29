import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  color,
  py,
  px,
  borderRadius,
  fontSize,
  cursor,
  textDecoration,
}) => {
  const style = {
    color: color || "black",
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
