import data from "./emoji.json";

import "./App.css";

import Card from "./Card.tsx";
import Nav from "./Nav.tsx";

export default function App() {
    const cards = data.map((emoji) => (
        <li>
            <Card emoji={emoji} />
        </li>
    ));
    return (
        <main>
            <Nav data={data}></Nav>
            <ul>{cards}</ul>
        </main>
    );
}
