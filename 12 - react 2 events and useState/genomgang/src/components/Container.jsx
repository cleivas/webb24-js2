import { ChangeColor } from "./ChangeColor"
import { useState } from "react"

export function Container(){
    // statet tillhör Container-komponenten men ska uppdateras i en ChangeColor-komponent
    const [cssClass, setCssClass] = useState('');

    return (
        <div className={cssClass}>
            {/* Vi skickar ner setCssClass-fuktionen till ChangeColor-komponenterna så att vi kan uppdatera statet där */}
            <ChangeColor setParentColor={setCssClass} colorText='pink'/>
            <ChangeColor setParentColor={setCssClass} colorText='blue'/>
            
        </div>
    )
}