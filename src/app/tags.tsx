interface TagProps {
    id: string;
    slug: string;
}

export async function Tags() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('http://localhost:3333/tags', {
        next: {
            tags: ['get-tags'],
        },
    });
    const data = await response.json();
    return (
        <ul>
            {data.map((item: TagProps) => (
                <li key={item.id}>{item.slug}</li>
            ))}
        </ul>
    );
}

// server component -> renerizar do lado do servidor
