type QuestionProps = {
    number: number;
    text: string;
    pre?: string;
};
export default function question({ number, text, pre }: QuestionProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <h1>Question {number}</h1>
            <p>{text}</p>
            {pre && <pre>{pre}</pre>}
        </div>
    );
}