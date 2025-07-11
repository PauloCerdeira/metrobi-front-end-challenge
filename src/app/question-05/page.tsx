"use client"
import { useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_05() {
    const centerContent = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={5} text="A building has 100 floors. One of the floors is the highest floor an egg can be dropped
from without breaking. If an egg is dropped from above that floor, it will break. If it is
dropped from that floor or below, it will be completely undamaged and you can drop the
egg again. Given two eggs, find the highest floor an egg can be dropped from without
breaking, with as few drops as possible in the worst-case scenario." />
            <Answer answer={`First egg: Used to narrow down the range.

Second egg: Used for a linear search within that range.

Drop from floor x, then x + (x - 1), then x + (x - 1) + (x - 2)... up to 100.

optimal solution: 14 drops`} />
        </div>
    );
}
