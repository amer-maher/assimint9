import { useState } from "react"

const Modal = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>

            <button onClick={() => setOpen(true)}>
                Open Modal
            </button>

            {open && (
                <div
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setOpen(false)
                        }
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >

                    
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            minWidth: "300px"
                        }}
                    >

                        <h2>Modal Content</h2>

                        <p>This is a simple modal</p>

                       
                        <button onClick={() => setOpen(false)}>
                            Close
                        </button>

                    </div>

                </div>
            )}
        </div>
    )
}

export default Modal