import Formacion from "./Formacion";
import {Accordion, AccordionProps} from "../Components/Accordion";

function Inputs() {
    const items: AccordionProps["items"] = [
        { 
            id: "formacion", 
            heading: "Formación", 
            body: <Formacion />,
            parentId: "inputAccordion",
            iconName: "person-vcard"
        },
        { 
            id: "produccion", 
            heading: "Producción", 
            body: "This is the second item's accordion body.",
            parentId: "inputAccordion",
            iconName: "journal-text"
        },
        { 
            id: "asesoria", 
            heading: "Asesoría", 
            body: "This is the third item's accordion body.",
            parentId: "inputAccordion",
            iconName: "people"
        }
    ];

    return ( 
        <div>
            <Accordion id = "inputAccordion" items = {items}/>
        </div>
     );
}

export default Inputs;