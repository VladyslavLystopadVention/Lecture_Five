import { useRef } from "react"

export const Canvas = () => {

    const ref = useRef<HTMLCanvasElement>(null);
    console.log('Canvas change');

    const handleDraw = () => {
        const canvas = ref.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        console.log("Before:", ctx.fillStyle);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(30, 30, 120, 120);

        console.log("After:", ctx.fillStyle);
    };

    return (
        <>
            <canvas ref={ref} width={200} height={200}></canvas>
            <button onClick={handleDraw}>
                See whats in canvas
            </button>
        </>
    )

}