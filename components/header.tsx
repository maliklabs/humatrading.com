import type { FC } from "react";

const Header: FC = () => {
    return (
        <nav className="w-screen flex flex-row justify-end">
            <div className="w-fit mr-auto">Logo Here</div>
            <a>What is up</a>
        </nav>
    );
};

export default Header;
