import { useNavigate, useLocation } from "react-router";


export default function TeleprompterScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;


    return (
        <>
            <p>Teleprompter Screen</p>
            <button onClick={() => navigate(-1)}>Back</button>
            <pre style={{fontFamily: state.fontFamily, color: state.color, background: state.bg, fontSize: state.fontsize,}}>{state.script}</pre>
            <button>start</button>
            <button>pause</button>
            <button>stop</button>
        </>
    );
}