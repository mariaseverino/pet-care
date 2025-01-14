import styles from './user-form.module.css';

interface UserFormProps {
    title: string;
    action: string;
    handle: () => void;
}

export default function UserForm({ title, action, handle }: UserFormProps) {
    return (
        <div className={styles.container}>
            <p className={styles.titulo}>{title}</p>
            <form action={handle} method="POST" className={styles.form}>
                {/* <input type="text" name="name" placeholder="Nome do tutor" /> */}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={styles.input}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    className={styles.input}
                />
                <button type="submit" className={styles.btn}>
                    Registrar
                </button>
            </form>
            <p className={styles.message}>
                {action == 'register'
                    ? 'Já tem uma conta?'
                    : 'Ainda nao tem uma conta?'}
                <a href={`/${action}`} className={styles.link}>
                    {action}
                </a>
            </p>
        </div>
    );
}
