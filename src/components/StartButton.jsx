import React from "react";
import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const StartButton = ({ isFavorite, onClickFunction }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClickFunction} />;
};

export default StartButton;
