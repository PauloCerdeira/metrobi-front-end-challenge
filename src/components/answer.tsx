type AnswerProps = {
    answer: string;
};
export default function Answer({ answer }: AnswerProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2>Answer:</h2>
            <div style={{ backgroundColor: "#1f1f1f", padding: "16px", borderRadius: "8px" }}>
                <pre>
                    {answer}
                </pre>
            </div>
        </div>
    );
}