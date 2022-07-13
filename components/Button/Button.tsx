import * as React from "react";
import Link from "next/link";

import StyledButton from "./StyledButton";

interface ButtonProps
  extends React.PropsWithChildren,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  href?: string;
}

function Button({ children, type, href, ...rest }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton type={type} as="a" {...rest}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
