import * as React from "react";
import { FieldError } from "react-hook-form";

import { StyledInput, StyledError, StyledLabel } from "./StyledInput";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  prependIcon?: React.ReactNode;
  error?: FieldError;
}

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { prependIcon, error, name } = props;

  return (
    <div className={error && "error"}>
      <StyledLabel htmlFor={name}>
        {prependIcon && (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: 44,
              borderRight: "1px solid #ccc",
              backgroundColor: "#fafafa",
              color: "#666",
            }}
          >
            {prependIcon}
          </span>
        )}
        <span style={{ flex: 1 }}>
          <StyledInput
            ref={ref}
            id={name}
            aria-invalid={error ? "true" : "false"}
            {...props}
          />
        </span>
      </StyledLabel>
      {error && <StyledError>{error.message}</StyledError>}
    </div>
  );
}

export default React.forwardRef(Input);
