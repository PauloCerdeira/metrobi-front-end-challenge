"use client"
import { useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_01() {

    const [inputValue, setInputValue] = useState("1, 2, 3, 4, 5, 1, 2");
    const [duplicates, setDuplicates] = useState<string[]>(["1", "2"]);
    const findDuplicates = (arr: any[]) => {
        const seen: any[] = [];
        const duplicates: any[] = [];
        for (const item of arr) {
            seen.includes(item) ? duplicates.push(item) : seen.push(item);
        }
        return duplicates;
    };

    const execute = () => {
        try {
            const inputArray = inputValue.split(',').map(item => item.trim());
            const duplicates = findDuplicates(inputArray);
            setDuplicates(duplicates);
        } catch (error) {
            alert("invalid input, please enter a comma-separated list of items.");
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={1} text="Write a javascript function that finds the duplicate items in any given array." />
            <Answer answer={`const findDuplicates = (arr: any[]) => {
        const seen: any[] = [];
        const duplicates: any[] = [];
        for (const item of arr) {
            seen.includes(item) ? duplicates.push(item) : seen.push(item);
        }
        return duplicates;
    }`} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2>Example Usage:</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    Array: <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={execute}>
                        Find Duplicates
                    </button>
                </div>
                <h3>Output:</h3>
                <div>
                    {duplicates.length > 0 ? duplicates.join(", ") : "No duplicates found."}
                </div>
            </div>
        </div>
    );
}
