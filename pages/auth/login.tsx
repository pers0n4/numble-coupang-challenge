import styled from "@emotion/styled";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

import Button from "../../components/Button";
import Input from "../../components/Input";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (error) =>
    console.error(error);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type="text"
          placeholder="아이디(이메일)"
          error={errors.email}
          prependIcon={<span className="material-icons-outlined">email</span>}
          {...register("email", {
            required: "아이디(이메일)를 입력해주세요.",
            pattern: {
              value:
                /^([a-z0-9_-]+(?:\.[a-z0-9_-]+)*)@((?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?))$/i,
              message: "아이디(이메일)는 이메일 형식으로 입력해주세요.",
            },
          })}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          error={errors.password}
          prependIcon={<span className="material-icons-outlined">lock</span>}
          {...register("password", { required: "비밀번호를 입력해주세요." })}
        />
        <Button type="submit">로그인</Button>
        <hr style={{ margin: "1rem 0" }} />
        <Button href="/auth/signup">회원가입</Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 290px;
  max-width: 460px;
  width: auto;
  margin: 0 auto;
`;
