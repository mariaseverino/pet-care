import UserForm from '@/components/user-form';
import Image from 'next/image';
import styles from './register.module.css';

export default function Register() {
    async function handleRegisterUser(form: FormData) {
        'use server';

        // const name = form.get('name');
        const email = form.get('email');
        const senha = form.get('senha');

        if (!email || !senha) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 3000));

        await fetch('http://localhost:3333/users', {
            method: 'POST',
            body: JSON.stringify({
                name: '',
                email,
                senha,
            }),
        });

        // revalidateTag('get-tags');
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.imagem}>
                <Image
                    src="/register.svg"
                    alt="Mulher com seu cachorro"
                    width={500}
                    height={500}
                    layout="responsive"
                    priority
                    className={styles.img}
                />
            </div>
            <UserForm
                title="Crie sua conta"
                action="register"
                handle={() => handleRegisterUser}
            />
        </div>
    );
}
