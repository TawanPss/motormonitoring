import React from "react";
import Sidebar from "../components/Sidebar";

export default function Records(){
    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="content">
                    <h1>Records</h1>
                </main>
            </div>
        </>
    )
}