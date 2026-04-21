import { useEffect, useState } from "react";

const Countdown = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {

        const id = setInterval(() => {
            setCount((prev) => {
                if (prev <= 0) {
                    clearInterval(id);
                    setCount(10)
                }
                return prev - 1
            })
        },1000)
        return () => clearInterval(id)
    })
    return (
        <div style={{ textAlign: "center", fontSize: "30px" }}>
            <h1>Countdown</h1>
            <h2>{count}</h2>
        </div>
    )
}
export default Countdown;