import { revalidateTag } from 'next/cache';
import { AddTagButton } from './add-tag-button';

export function AddTag() {
    async function handleCreateTag(form: FormData) {
        'use server';

        const slug = form.get('slug');

        if (!slug) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 3000));

        await fetch('http://localhost:3333/tags', {
            method: 'POST',
            body: JSON.stringify({
                slug,
            }),
        });

        revalidateTag('get-tags');
    }
    return (
        <form action={handleCreateTag} method="POST">
            <input type="text" name="slu;...\;;g" placeholder="Slug da tag" />
            <AddTagButton />
        </form>
    );
}

// cliente compoenent -> se vai ouvir algum evento do usuario ele tem q ser client componte

// lift state up

// react query => tanstack query => http state
