import { emoji } from "./types.tsx";

type CardProps = { emoji: emoji };

export default function Card({ emoji }: CardProps) {
    return (
        <article id={emoji.hexcode}>
            <dl>
                <Di term="Label" desc={emoji.label} />
                <Di term="Emoji" desc={emoji.emoji} />
                {emoji.tags && <Di term="Tags" desc={emoji.tags.join(", ")} />}
                {emoji.skins && (
                    <Di term="Skins">
                        <Skins skins={emoji.skins} />
                    </Di>
                )}
            </dl>
        </article>
    );
}

type SkinsProps = { skins: emoji[] };

function Skins({ skins }: SkinsProps) {
    return (
        <ul>
            {skins.map((s) => (
                <li>{s.emoji}</li>
            ))}
        </ul>
    );
}

type DiProps = { term: string; desc?: string; children?: React.ReactElement };

function Di({ term, desc, children }: DiProps) {
    return (
        <>
            <dt>{term}</dt>
            <dd>{desc || children}</dd>
        </>
    );
}
