import useLocalStorage from "../hooks/useLocalStorage";
const ThemeApp = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div
            style={{
              
                padding: "20px",
                backgroundColor: theme === "light" ? "#fff" : "#121212",
                color: theme === "light" ? "#000" : "#fff",
                transition: "0.3s"
            }}
        >
            <h1>Theme System</h1>

            <p>Current theme: {theme}</p>

            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"}
            </button>
        </div>
    );
};

export default ThemeApp;