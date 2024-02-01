import React from "react"
import Sidebar from "../components/Sidebar"
import '../index.css'
export default function Dashboard(){
    const storage = []

    return (
        <>
            <div className="app">
                <Sidebar/>
                <main className="content">
                    <h1>Dashboard</h1>
                </main>
            </div>
        </>
    )
}