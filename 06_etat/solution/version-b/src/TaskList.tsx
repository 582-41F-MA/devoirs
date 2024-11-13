import { useState } from "react";

import Task from "./Task.tsx";

type task = { id: number; name: string };

export default function TaskList() {
    const [store, setStore] = useState([] as task[]);
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);

    function handleEdit(id: number, name: string): void {
        const updatedStore = store.map((task) => {
            if (id !== task.id) return task;
            return { id, name };
        });
        setStore(updatedStore);
    }

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        setStore([{ name: value, id: count }, ...store]);
        setCount(count + 1);
        console.log(store);
    }

    function handleChange(e: React.ChangeEvent): void {
        const input = e.target as HTMLInputElement;
        setValue(input.value);
    }

    const taskUl = store.map((task) => (
        <li>
            <Task id={task.id} name={task.name} onEdit={handleEdit} />
        </li>
    ));

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Ajouter une tâche</legend>
                    <label>
                        nom
                        <input
                            type="text"
                            onChange={handleChange}
                            value={value}
                            required
                        />
                    </label>
                </fieldset>
                <button>Enregistrer</button>
            </form>
            <ul>{taskUl}</ul>
        </main>
    );
}
