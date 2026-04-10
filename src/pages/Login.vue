<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <div class="text-2xl font-bold">
            Vistuu App
        </div>

        <div class="w-full px-6 mt-6">
            <Form v-slot="$form" :initialValues="{ email: '', password: '' }" @submit="onFormSubmit" class="flex flex-col gap-4 w-full">
                <div class="flex flex-col gap-1">
                    <InputText class="rounded-lg" name="email" type="text" placeholder="E-mail" fluid />
                    <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
                </div>

                <div class="flex flex-col gap-1">
                    <Password :feedback="false" class="rounded-lg" toggleMask placeholder="Senha" fluid />
                    <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error?.message }}</Message>
                </div>
                <Button class="bg-mauve-400 hover:bg-mauve-500 text-white font-bold p-2 rounded-xl" type="submit" severity="secondary" label="Entrar" />
            </Form>

            <div class="mt-10">
                <div>
                    Esqueceu sua senha? 
                </div>
                <div>
                    Não tem uma conta?
                    <a href="/register">Cadastre-se</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Form } from '@primevue/forms';

const onFormSubmit = (values: any) => {
    console.log(values);
}
</script>

<style scoped>

</style>