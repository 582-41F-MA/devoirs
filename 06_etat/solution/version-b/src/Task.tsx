import { useState } from "react";

type TaskProps = {
    id: number;
    name: string;
    onEdit: (id: number, name: string) => void;
};

export default function Task({ id, name, onEdit }: TaskProps) {
    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const style = {
        textDecoration: isDone ? "line-through" : "",
    };

    function handleChange() {
        setIsDone(!isDone);
    }

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    function handleEdit(name: string): void {
        onEdit(id, name);
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label style={style}>
                    <input type="checkbox" onChange={handleChange} />
                    <TaskField
                        name={name}
                        onEdit={handleEdit}
                        isEditing={isEditing}
                    />
                </label>
                <button>Editer</button>
            </form>
        </article>
    );
}

type TaskFieldProps = {
    name: string;
    isEditing: boolean;
    onEdit: (name: string) => void;
};

function TaskField({ name, isEditing, onEdit }: TaskFieldProps) {
    function handleChange(e: React.ChangeEvent): void {
        const input = e.target as HTMLInputElement;
        onEdit(input.value);
    }

    if (isEditing) {
        return <input type="text" value={name} onChange={handleChange} />;
    }
    return name;
}
