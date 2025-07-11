"use client"
import { useEffect, useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_02() {
    const [inputValue, setInputValue] = useState("1, 2, 3, 4, 5");
    const [output, setOutput] = useState<string[]>([]);

    const writeWithExponentialDelay = async (arr: any[]) => {
        setOutput([]);

        if (!arr?.length) {
            alert("Please enter a valid array.");
            return;
        }

        let output = [];
        let ms = 1000; // Start with 1 second
        for (let i = 0; i < arr.length; i++) {
            const startTime = Date.now();
            await new Promise(resolve => setTimeout(resolve, ms));
            const elapsedTime = Date.now() - startTime;
            output.push(`${arr[i]} - Elapsed time: ${Math.trunc(elapsedTime / 1000)} seconds`);
            setOutput([...output]); // Update the output state
            ms *= 2; // double the delay
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={2} text="Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
etc., seconds apart." />
            <Answer answer={`const writeWithExponentialDelay = async (arr: any[]) => {
    setOutput([]);

    if (!arr?.length) {
        alert("Please enter a valid array.");
        return;
    }

    let output = [];
    let ms = 1000; // Start with 1 second
    for (let i = 0; i < arr.length; i++) {
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, ms));
        const elapsedTime = Date.now() - startTime;
        output.push(\`\${arr[i]} - Elapsed time: \${Math.trunc(elapsedTime/1000)} seconds\`);
        setOutput([...output]);
        ms *= 2;
    }
}`} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2>Example Usage:</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    Array: <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={() => writeWithExponentialDelay(inputValue.split(",").map(item => item.trim()))}>
                        Execute
                    </button>
                </div>
                <h3>Output:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {output.map((item, index) => (<div key={index}>{item}</div>))}
                </div>
            </div>
        </div>
    );
}
