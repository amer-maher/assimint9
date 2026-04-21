import { useState } from "react"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("overview")

    const tabStyle = (tab) => ({
        padding: "10px 20px",
        cursor: "pointer",
        border: "none",
        borderBottom: activeTab === tab ? "3px solid blue" : "1px solid gray",
        backgroundColor: activeTab === tab ? "#f0f8ff" : "#f9f9f9",
        fontWeight: activeTab === tab ? "bold" : "normal"
    })

    const contentStyle = {
        padding: "15px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginTop: "10px"
    }

    return (
        <div style={{ width: "300px", margin: "20px auto", fontFamily: "Arial" }}>

            {/* Tabs */}
            <div style={{ display: "flex" }}>
                <button style={tabStyle("overview")} onClick={() => setActiveTab("overview")}>
                    Overview
                </button>

                <button style={tabStyle("lessons")} onClick={() => setActiveTab("lessons")}>
                    Lessons
                </button>

                <button style={tabStyle("reviews")} onClick={() => setActiveTab("reviews")}>
                    Reviews
                </button>
            </div>

            {/* Content */}
            <div style={contentStyle}>
                {activeTab === "overview" && <p>This is the overview content</p>}
                {activeTab === "lessons" && <p>Here are the lessons</p>}
                {activeTab === "reviews" && <p>User reviews appear here</p>}
            </div>

        </div>
    )
}

export default Tabs