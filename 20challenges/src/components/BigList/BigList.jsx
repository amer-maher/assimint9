import { useMemo, useState } from "react";

const BigList = () => {
    const [query, setQuery] = useState("");

    const items = [
        "Laptop",
        "Phone",
        "Tablet",
        "Headphones",
        "Keyboard",
        "Mouse",
        "Monitor",
        "Printer",
        "Camera",
        "Speaker",
        "Smart Watch",
        "Microphone",
        "Charger",
        "USB Cable",
        "Power Bank",
    ];

    const filteredItems = useMemo(() => {
        console.log("Filtering...");

        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, items]);

    return (
        <div>
            <h2>Search Products</h2>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BigList;