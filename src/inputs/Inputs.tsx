import Formacion from "./Formacion";
import Asesoria from "./Asesoria";
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
            body: <Asesoria />,
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