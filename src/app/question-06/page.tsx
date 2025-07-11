"use client"
import { useEffect } from "react";
import Question from "../../components/question";
import turtleRunning from '../../assets/turtle.gif';
import achillesRunning from '../../assets/achilles.gif';
import achillesStopped from '../../assets/achilles-stopped.gif';
import turtleStopped from '../../assets/turtle-stopped.webp';

export default function question_06() {

    const startAnimation = () => {
        const achilles = document.getElementById("Achilles") as HTMLImageElement;
        const tortoise = document.getElementById("Tortoise") as HTMLImageElement;
        if (!achilles || !tortoise) return;

        achilles.style.left = `50%`;
        tortoise.style.left = `80%`;
        achilles.style.transform = 'scale(1.5)';
        tortoise.style.transform = 'scale(1.5)';

        setInterval(() => {
            if (achilles.style.left === `50%`) {
                achilles.style.left = `10%`;
                tortoise.style.left = `50%`;
                achilles.style.transform = 'scale(1)';
                tortoise.style.transform = 'scale(1)';
                achilles.src = achillesStopped.src;
                tortoise.src = turtleStopped.src;
            } else {
                achilles.src = achillesRunning.src;
                tortoise.src = turtleRunning.src;
                achilles.style.transform = 'scale(1.5)';
                tortoise.style.transform = 'scale(1.5)';
                achilles.style.left = `50%`;
                tortoise.style.left = `80%`;
            }
        }, 3000);

    }

    const centerContent = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={6} text="Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
interface(we would like to see the paradox demonstrated)." />
            <div style={{ height: '400px', width: 'min(100%, 600px)', background: 'white', borderRadius: '8px', position: 'relative' }}>
                <img id="Achilles" src={achillesRunning.src} alt="achilles" style={{ ...centerContent, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', transition: 'all 3s ease-in-out', height: '100px', width: '80px', position: 'absolute', top: '150px', left: '10%' }} />
                <img id="Tortoise" src={turtleRunning.src} alt="tortoise" style={{ ...centerContent, transition: 'all 3s ease-in-out', height: '100px', width: '80px', position: 'absolute', top: '150px', left: '50%' }} />
            </div>
        </div>
    );
}
