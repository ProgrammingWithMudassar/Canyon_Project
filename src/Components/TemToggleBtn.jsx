import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'

const TemToggleBtn = () => {


    const [alignment, setAlignment] = useState("c");

    const handleChange = (event, newAlignment) => {
        if (newAlignment === alignment) { return }
        setAlignment(newAlignment);
    };


    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body2" color="initial" sx={{ mr: 2 }}>Temperature</Typography>
            <ToggleButtonGroup color="primary" exclusive value={alignment} onChange={handleChange} aria-label="Platform" >
                <ToggleButton value="c" sx={{ width: "40px", height: "2px", backgroundColor: alignment === "c" ? "#F4976C" : "#fff", color: alignment === "c" ? "white" : "black", }} >°C</ToggleButton>
                <ToggleButton value="f" sx={{ width: "40px", height: "2px", backgroundColor: alignment === "f" ? "#F4976C" : "white", color: alignment === "f" ? "white" : "black", }} > °F</ToggleButton>
            </ToggleButtonGroup>
        </section>
    )
}

export default TemToggleBtn