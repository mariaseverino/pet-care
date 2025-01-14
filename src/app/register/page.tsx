import { revalidateTag } from 'next/cache';

export default function Register() {
    async function handleRegisterUser(form: FormData) {
        'use server';

        const name = form.get('name');
        const email = form.get('email');
        const senha = form.get('senha');

        if (!name || !email || !senha) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 3000));

        await fetch('http://localhost:3333/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                senha,
            }),
        });

        revalidateTag('get-tags');
    }
    return (
        <div>
            <form action={handleRegisterUser} method="POST">
                <input type="text" name="name" placeholder="Nome do tutor" />
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="senha" placeholder="Senha" />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}
