import { useState } from "react";

import Task from "./Task.tsx";

type task = { id: number; name: string };

export default function TaskList() {
    const [store, setStore] = useState<task[]>([]);
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        const newTask = { id: count, name: name };
        setStore([newTask].concat(store));
        setName("");
        setCount(count + 1);
    }

    function handleChange(e: React.ChangeEvent): void {
        const input = e.target as HTMLInputElement;
        setName(input.value);
    }

    function handleEdit(id: number, name: string) {
        const updatedStore = store.map((task) => {
            if (task.id !== id) return task;
            return { id, name };
        });
        setStore(updatedStore);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add a task</legend>
                    <label>
                        Name
                        <input
                            type="text"
                            onChange={handleChange}
                            value={name}
                            required
                        />
                    </label>
                    <button>Submit</button>
                </fieldset>
            </form>
            <p>Total: {store.length}</p>
            {store.map((t) => (
                <Task onEdit={handleEdit} key={t.id} id={t.id} name={t.name} />
            ))}
        </>
    );
}
