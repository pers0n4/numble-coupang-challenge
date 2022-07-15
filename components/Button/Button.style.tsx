import styled, { CSSObject } from "@emotion/styled";

export type ButtonColor = "primary" | "link";

const styles: Record<ButtonColor, CSSObject> = {
  primary: {
    backgroundColor: "#0074e9",
    color: "#fff",
    ":active": {
      boxShadow: "inset 0 2px 0 rgb(0 0 0 / 38%)",
    },
  },
  link: {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#0073e9",
    ":active": {
      boxShadow: "inset 0 1px 0 rgb(0 0 0 / 15%)",
    },
  },
};

export interface StyledButtonProps {
  href?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  width: 100%;
  border: 0;
  margin-top: 16px;
  padding: 16px 17px;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;

  ${({ href }) => styles[href ? "link" : "primary"]};
`;

export default StyledButton;
