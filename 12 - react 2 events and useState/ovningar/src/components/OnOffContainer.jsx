import { DisplayOnOff } from "./DisplayOnOff.jsx";
import { ToggleOnOff } from "./ToggleOnOff.jsx";
import { useState } from "react";

export function OnOffContainer(){
    // Statet används i DisplayOnOff men uppdateras i ToggleOnOff
    const [onOff, setOnOff] = useState('on');

    return <section>
        <DisplayOnOff onOff={onOff} />
        <ToggleOnOff text='on' setOnOff={setOnOff}/>
        <ToggleOnOff text='off' setOnOff={setOnOff}/>
        <ToggleOnOff text='CLARA' setOnOff={setOnOff}/>
    </section>
}