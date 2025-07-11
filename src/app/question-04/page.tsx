"use client"
import { useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_04() {
    const [inputValue, setInputValue] = useState("{[]}");
    const closesCorrectly = (str: string) => {
        const stack = [];
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const char of str) {
            if (Object.values(pairs).includes(char)) {
                stack.push(char);
            } else if (Object.keys(pairs).includes(char)) {

                if (stack.pop() !== pairs[char as keyof typeof pairs]) return false;
            }
        }

        return stack.length === 0;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={4} text={`Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly. Example: "{[]}" => true, "{(])}" => false, "{([)]}" => false.`} />
            <Answer answer={`const closesCorrectly = (str: string) => {
        const stack = [];
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const char of str) {
            if (Object.values(pairs).includes(char)) {
                stack.push(char);
            } else if (Object.keys(pairs).includes(char)) {
                if (stack.pop() !== pairs[char]) return false;
            }
        }

        return stack.length === 0;
    }`} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h2>Example Usage:</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    String: <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <h3>Output:</h3>
                <div>
                    {closesCorrectly(inputValue) ? "Valid" : "Invalid"}
                </div>
            </div>
        </div>
    );
}
