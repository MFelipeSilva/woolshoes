import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { PrimaryButton } from "ui";

import { postRegisterUser } from "@lib/api";

import {
  Container,
  Input,
  Form,
  Label,
  RequiredFields,
  Title,
  ErrorText,
} from "./styles";

const createUserFormSchema = z
  .object({
    name: z
      .string()
      .min(3, "É necessário o seu nome.")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0]?.toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .min(1, "O email é obrigatório.")
      .email("Formato de email inválido."),
    password: z.string().min(8, "A senha precisa de no mínimo 8 caracteres."),
    confirmPassword: z
      .string()
      .min(8, "A senha precisa de no mínimo 8 caracteres."),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "As senhas não se correspodem.",
      });
    }
  });

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const mutation = useMutation(postRegisterUser);

  const router = useRouter();

  const createUser = async (userData: CreateUserFormData) => {
    const { name, email, password, confirmPassword } = userData;

    try {
      const { data: newUser } = await mutation.mutateAsync({
        name,
        email,
        password,
        confirmPassword,
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Criar uma conta</Title>
      <Form onSubmit={handleSubmit(createUser)}>
        <Label htmlFor="name">
          Nome*
          <Input
            type="text"
            {...register("name")}
            error={errors && errors.name === undefined ? false : true}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Label>
        <Label htmlFor="email">
          Email*
          <Input
            type="email"
            {...register("email")}
            error={errors && errors.email === undefined ? false : true}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Label>
        <Label htmlFor="password">
          Senha*
          <Input
            type="password"
            minLength={8}
            maxLength={16}
            {...register("password")}
            error={
              errors && errors.confirmPassword === undefined ? false : true
            }
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </Label>
        <Label htmlFor="password">
          Confirmar senha*
          <Input
            type="password"
            minLength={8}
            maxLength={16}
            {...register("confirmPassword")}
            error={
              errors && errors.confirmPassword === undefined ? false : true
            }
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
          )}
        </Label>
        <RequiredFields>Campos obrigatórios (*)</RequiredFields>
        <PrimaryButton type="submit">Registrar</PrimaryButton>
      </Form>
    </Container>
  );
};
