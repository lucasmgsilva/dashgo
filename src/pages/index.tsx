import { Button, Flex, Stack } from "@chakra-ui/react";
import {Input} from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string,
  password: string
} 

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigatório')
})

export default function SignIn(){
  const {register, handleSubmit, formState} = useForm({resolver: yupResolver(SignInFormSchema)});

  const {errors} = formState;

  const handleSigIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSigIn)}
      >
      <Stack spacing={4}>
            <Input 
              // name="email" 
              type="email"
              label="E-mail"
              error={errors.email}
              {...register('email')}
            />
            <Input 
              // name="password" 
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
      </Stack>
      <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}