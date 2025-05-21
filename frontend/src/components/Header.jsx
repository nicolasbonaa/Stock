import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="text-white flex flex-row justify-between items center bg-red-500 h-24 p-4">
            <div className="flex flex-row items-center gap-4">
                <h1 className="text-3xl font-bold">Infraboys</h1>
            </div>
            <div className="flex flex-row justify-between items-center gap-4 text-lg">
                <Link to="/numbers-assets">Numeração de Ativos</Link>
                <h2>Checkin</h2>
                <h2>Checkout</h2>
                <h2>Ativos</h2>
                <h2>Acessórios</h2>
                <Link to="/checklist">Checklist</Link>

            </div>
        </div>
    );
}

export default Header;