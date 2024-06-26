import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { PrimaryButton } from "ui";

import { postLoginUser } from "@lib/api";

import {
  Container,
  ErrorText,
  ForgotPassword,
  Form,
  Input,
  Label,
  Title,
} from "./styles";

const userFormSchema = z.object({
  email: z
    .string()
    .min(1, "O email é obrigatório.")
    .email("Formato de email inválido."),
  password: z.string().min(8, "A senha precisa de no mínimo 8 caracteres."),
});

type UserFormData = z.infer<typeof userFormSchema>;

export const SignIn = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
  });

  const mutation = useMutation(postLoginUser);

  const router = useRouter();

  const userSignIn = async (userData: UserFormData) => {
    const { email, password } = userData;

    try {
      const user = await mutation.mutateAsync({
        email,
        password,
      });
      localStorage.setItem("@woolshoes/access-token", user.accessToken);

      router.push("/");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;

        setError("email", {
          type: "manual",
        });

        setError("password", {
          type: "manual",
          message: errorMessage,
        });
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <Title>Acessar conta</Title>
      <Form onSubmit={handleSubmit(userSignIn)}>
        <Label>
          Email
          <Input
            type="email"
            {...register("email")}
            error={errors && errors.email === undefined ? false : true}
          />
          {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            {...register("password")}
            error={errors && errors.password === undefined ? false : true}
          />
          {errors.password && <ErrorText>{errors.password?.message}</ErrorText>}
        </Label>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </Form>
    </Container>
  );
};
