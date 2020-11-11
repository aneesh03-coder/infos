import React from 'react';
import './ExtraNote.css';

const ExtraNote = () => {
    return (
        <div className="extraNote">
            <h2>Add a note</h2>
            <input className="note_input" type="text" placeholder="Let us know any additional request"></input>
        </div>
    )
}

export default ExtraNote
