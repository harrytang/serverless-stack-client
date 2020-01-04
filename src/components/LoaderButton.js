/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-04 16:50:53
 * @Last Modified by:   Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-04 16:50:53
 */
import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {props.children}
    </Button>
  );
}
