import { emoji } from "./types.tsx";

export default function Nav({ data }: { data: emoji[] }) {
    return (
        <nav>
            <ul>
                {data.map((emoji) => (
                    <li>
                        <NavItem emoji={emoji} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

type NavItemProps = { emoji: emoji };

function NavItem({ emoji }: NavItemProps) {
    return <a href={"#" + emoji.hexcode}>{emoji.label}</a>;
}
