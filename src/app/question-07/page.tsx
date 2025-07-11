"use client"
import { useEffect, useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_07() {
    const [carrotTypes, setCarrotTypes] = useState([{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }]);
    const [capacity, setCapacity] = useState(36);
    const [output, setOutput] = useState<{ maxPrice: number, carrotsUsed: { type: { kg: number, price: number }, count: number }[] }>({ maxPrice: 0, carrotsUsed: [] });

    const verifyMaxValue = (carrotTypes: { kg: number, price: number }[], capacity: number) => {
        const dp = Array(capacity + 1).fill(0);
        const used = Array(capacity + 1).fill(null).map(() => [] as number[]);

        for (let i = 0; i < carrotTypes.length; i++) {
            const { kg, price } = carrotTypes[i];

            for (let w = kg; w <= capacity; w++) {
                const newPrice = dp[w - kg] + price;
                if (newPrice > dp[w]) {
                    dp[w] = newPrice;
                    used[w] = [...used[w - kg]];
                    used[w][i] = (used[w][i] || 0) + 1;
                }
            }
        }

        setOutput({
            maxPrice: dp[capacity],
            carrotsUsed: used[capacity]?.map((count, i) => ({
                type: carrotTypes[i],
                count,
            })).filter(c => c.count > 0) || [],
        });
    };

    useEffect(() => {
        verifyMaxValue(carrotTypes, capacity);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={7} text="Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold. [Python or Javascript]" pre={`Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)`} />

            <Answer answer={`    const verifyMaxValue = (carrotTypes: { kg: number, price: number }[], capacity: number) => {
        const dp = Array(capacity + 1).fill(0);
        const used = Array(capacity + 1).fill(null).map(() => [] as number[]);

        for (let i = 0; i < carrotTypes.length; i++) {
            const { kg, price } = carrotTypes[i];

            for (let w = kg; w <= capacity; w++) {
                const newPrice = dp[w - kg] + price;
                if (newPrice > dp[w]) {
                    dp[w] = newPrice;
                    used[w] = [...used[w - kg]];
                    used[w][i] = (used[w][i] || 0) + 1;
                }
            }
        }

        setOutput({
            maxPrice: dp[capacity],
            carrotsUsed: used[capacity]?.map((count, i) => ({
                type: carrotTypes[i],
                count,
            })).filter(c => c.count > 0) || [],
        });
    };


    OUTPUT:
${JSON.stringify(output, null, 2)}`} />
        </div>
    );
}
