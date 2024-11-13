import { useState } from "react";

type TaskProps = {
    id: number;
    name: string;
    onEdit: (id: number, name: string) => void;
};

export default function Task({ id, name, onEdit }: TaskProps) {
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(name);

    function handleChangeDone(): void {
        setDone(!done);
    }

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        setEdit(!edit);
        onEdit(id, value);
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" onChange={handleChangeDone} />
                    <Name
                        name={value}
                        done={done}
                        edit={edit}
                        onChange={setValue}
                    />
                </label>
                <button>Edit</button>
            </form>
        </article>
    );
}

type NameProps = {
    name: string;
    done: boolean;
    edit: boolean;
    onChange: (value: string) => void;
};

function Name({ name, done, edit, onChange }: NameProps) {
    function handleChange(e: React.ChangeEvent): void {
        const input = e.target as HTMLInputElement;
        onChange(input.value);
    }

    if (edit) return <input type="text" value={name} onChange={handleChange} />;
    return <span>{done ? <s>{name}</s> : name}</span>;
}
