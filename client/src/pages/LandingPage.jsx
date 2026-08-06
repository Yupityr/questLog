import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center pt-[25vh] gap-1">
            <h1>
                Welcome to Quest Log
            </h1>
            <p>
                A journal web app to store your daily accomplishments
            </p>
            <button className="border rounded" onClick={() => navigate("/signup")}>
                Start
            </button>
        </div>
    )
}