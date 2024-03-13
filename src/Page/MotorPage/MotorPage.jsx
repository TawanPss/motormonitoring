
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MotorPage() {
    const location = useLocation();
    const { motorName, motorId, department, motorSeries } = location.state;

    return (
        <div>
            <label>Motor Name: {motorName}</label>
            <label>Motor ID: {motorId}</label>
            <label>Department: {department}</label>
            <label>Motor Series: {motorSeries}</label>
        </div>
    );
}