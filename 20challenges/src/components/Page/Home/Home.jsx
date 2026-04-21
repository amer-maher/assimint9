import { useState } from "react";
import Hello from "../../Hello/Hello";
import UserCard from "../../UserCard/UserCard";
import { InputForm, FormSubmit, SelectList, Tabs, Modal, Countdown, UserData, BigList } from "../../indexing";
import ThemeApp from "../../../Theme/ThemeApp";
const Home = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true)
    const [show, setShow] = useState(false)
    const [showAvailable, setShowAvailable] = useState(true);
    const [searchByName, setSearchByName] = useState("")
    const [product, setProduct] = useState({ name: "", available: true });
    const [user, setUser] = useState({
        level: "Beginner"
    });
    const products = [
        { id: 1, name: "Laptop", available: true },
        { id: 2, name: "Phone", available: false },
        { id: 3, name: "Tablet", available: true },
        { id: 4, name: "Headphones", available: true },
        { id: 5, name: "Keyboard", available: false },
        { id: 6, name: "Mouse", available: true },
        { id: 7, name: "Monitor", available: true },
        { id: 8, name: "Printer", available: false },
        { id: 9, name: "Camera", available: true },
        { id: 10, name: "Speaker", available: false },
        { id: 11, name: "Smart Watch", available: true },
        { id: 12, name: "Microphone", available: true },
        { id: 13, name: "Charger", available: false },
        { id: 14, name: "USB Cable", available: true },
        { id: 15, name: "Power Bank", available: true },
    ];
    const [productsList, setProductsList] = useState(products);
    const [editProduct, setEditProduct] = useState(null);
    const jobs = [
        { id: 1, jobTitle: "Reading", done: true },
        { id: 2, jobTitle: "Writing Code", done: false },
        { id: 3, jobTitle: "Learn React", done: true },
        { id: 4, jobTitle: "Build Project", done: false },
        { id: 5, jobTitle: "Fix Bugs", done: false },
        { id: 6, jobTitle: "Watch Tutorial", done: true },
        { id: 7, jobTitle: "Practice JavaScript", done: true },
        { id: 8, jobTitle: "Push to GitHub", done: false },
        { id: 9, jobTitle: "Read Documentation", done: true },
        { id: 10, jobTitle: "Sleep 😄", done: false }
    ]
    const [jobList, setJobList] = useState(jobs);
    return (
        <>
            <ThemeApp />
            <Hello />
            <UserCard name={"Amer"} title={"Genius engineer"} />
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>
                incres the counter by one
            </button>
            <br />
            <button onClick={() => setCount(0)}>
                rest the counter
            </button>
            <br />
            <button
                onClick={() => setToggle(prev => !prev)}
            >
                {toggle ? "ON" : "OFF"}
            </button>
            <div>
                <button onClick={() => setShow(prev => !prev)}
                >
                    {show ? "show" : "hide"}
                </button>
                {show && <>new text</>}
            </div>
            <div>
                <ul>
                    {
                        productsList.map((i) => (
                            <li key={i.id}><p>{i.name}</p></li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <button onClick={() => setShowAvailable(prev => !prev)}>
                    {showAvailable ? "get vailable item" : "hide vailable item"}
                </button>
                {
                    showAvailable &&
                    <ul>
                        {
                            productsList
                                .filter(i => i.available)
                                .map((i) => (
                                    <li key={i.id}>
                                        {i.name}
                                    </li>
                                ))
                        }
                    </ul>
                }
            </div>
            <div>
                <input type="text"
                    value={searchByName}
                    onChange={(e) => setSearchByName(e.target.value)}
                />
                <ul>
                    {productsList
                        .filter((i) =>
                            i.name
                                .toLowerCase()
                                .includes(searchByName.toLowerCase()
                                )
                        )
                        .map((i) =>
                        (<li key={i.id}>
                            {i.name}
                        </li>))
                    }
                </ul>

            </div>
            <div>
                <input type="text"
                    value={product.name}
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            name: e.target.value
                        })

                    }
                />
                <input
                    type="checkbox"
                    checked={product.available}
                    onChange={(a) =>
                        setProduct({
                            ...product,
                            available: a.target.checked
                        })
                    }
                />
                <button
                    onClick={() => {
                        if (!product.name.trim()) {
                            alert("you can't add empty product");
                            return;
                        }

                        setProductsList((prev) => [
                            ...prev,
                            {
                                id: Date.now(),
                                ...product
                            }
                        ]);

                        setProduct({ name: "", available: true });
                    }}
                >
                    add product
                </button>
            </div>
            <div>
                <ul>
                    {productsList.map((i) => (
                        <li key={i.id}>
                            {i.name}

                            <button onClick={() => setEditProduct(i)}>
                                edit
                            </button>
                        </li>
                    ))}
                </ul>
                {editProduct && (
                    <div>
                        <h3>Edit Product</h3>

                        <input
                            type="text"
                            value={editProduct.name}
                            onChange={(e) =>
                                setEditProduct({
                                    ...editProduct,
                                    name: e.target.value
                                })
                            }
                        />

                        <input
                            type="checkbox"
                            checked={editProduct.available}
                            onChange={(e) =>
                                setEditProduct({
                                    ...editProduct,
                                    available: e.target.checked
                                })
                            }
                        />

                        <button
                            onClick={() => {
                                setProductsList(
                                    productsList.map((p) =>
                                        p.id === editProduct.id ? editProduct : p
                                    )
                                );

                                setEditProduct(null);
                            }}
                        >
                            save
                        </button>
                    </div>
                )}

            </div>
            <div>
                <h3>
                    to do List
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {jobList.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => {
                                setJobList(
                                    jobList.map((j) =>
                                        j.id === item.id
                                            ? { ...j, done: !j.done }
                                            : j
                                    )
                                );
                            }}
                            style={{
                                cursor: "pointer",
                                backgroundColor: "#f5f5f5",
                                margin: "10px 0",
                                padding: "10px",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontFamily: "Arial"
                            }}
                        >
                            <span>{item.jobTitle}</span>

                            <span
                                style={{
                                    color: item.done ? "green" : "red",
                                    fontWeight: "bold"
                                }}
                            >
                                {item.done ? "✅ Done" : "❌ Not Done"}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <InputForm />
            </div>

            <div>
                <FormSubmit />
            </div>
            <div>
                <SelectList
                    value={user.level}
                    onChange={(e) => {
                        setUser({ ...user, level: e.target.value })
                    }}
                />
            </div>
            <div>
                <Tabs />
            </div>
            <div>
                <Modal />
            </div>
            <div>
                <Countdown />
            </div>
            <div>
                <UserData />
            </div>
            <div>
                <BigList />
            </div>
        </>
    );
}
export default Home