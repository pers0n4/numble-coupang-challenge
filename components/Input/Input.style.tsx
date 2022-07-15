import styled from "@emotion/styled";

export const StyledLabel = styled.label`
  display: flex;
  border: 1px solid #ccc;
  margin-top: 16px;

  :focus-within {
    border-bottom: 2px solid #346aff;
  }

  .error & {
    border-bottom: 2px solid #e7223d;
  }
`;

export const StyledError = styled.div`
  margin: 9px 12px 0;
  padding: 0;
  color: #e52528;
  font-size: 12px;
  line-height: 18px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  outline: 0;
  border: 0;
  padding: 16px 0 12px;
  background-color: #fff;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-indent: 12px;
`;
