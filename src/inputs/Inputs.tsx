import Formacion from "./Formacion";
import {Accordion, AccordionProps} from "../Components/Accordion";

function Inputs() {
    const items: AccordionProps["items"] = [
        { id: "formacion", heading: "Formación", body: "This is the first item's accordion body." },
        { id: "produccion2", heading: "Producción", body: "This is the second item's accordion body." },
        { id: "asesoria", heading: "Asesoría", body: "This is the third item's accordion body." }
      ];

    return ( 
        <div>
            <Accordion items = {items}/>
            <Formacion />
        </div>
     );
}

export default Inputs;