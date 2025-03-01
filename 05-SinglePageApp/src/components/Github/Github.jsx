import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const githubData = useLoaderData();

    return (
        <div className="bg-gray-500 text-white text-3xl text-center p-5">
            Github: {githubData.name}
            <img src={githubData.avatar_url} width={300} alt="" />
        </div>
    );
}

export default Github;

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/Mahmoud8833");
    const githubData = await response.json();

    if (!response.ok) {
        throw new Error(githubData.message);
    }

    return githubData;
};

