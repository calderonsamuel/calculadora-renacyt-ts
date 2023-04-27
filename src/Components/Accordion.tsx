import React from "react"

interface AccordionItemProps {
    id: string;
    heading: string;
    body: string;
}

export interface AccordionProps {
    items: { id: string; heading: string; body: string }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, heading, body }) => {
    const headerId:string = "header-" + id
    const collapseId:string = "collapse-" + id
  return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={headerId}>
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#${collapseId}`} 
            aria-expanded="false" 
            aria-controls={collapseId}>
            {heading}
          </button>
        </h2>
        <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headerId} data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {body}
          </div>
        </div>
      </div>
  )
}


export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className="accordion" id="accordionExample">
      {items.map((item, index) => (
          <AccordionItem key={index} id={item.id} heading={item.heading} body={item.body} />
          ))}
    </div>
  )
}
