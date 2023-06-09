import React from "react"

interface AccordionItemProps {
    id: string;
    heading: React.ReactNode;
    body: React.ReactNode;
    parentId: string;
    iconName?: string;
}

export interface AccordionProps {
    id: string;
    items: AccordionItemProps[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, heading, body , parentId, iconName}) => {
    const headerId:string = "header-" + id
    const collapseId:string = "collapse-" + id

    const iconClasses:string = iconName ? `bi bi-${iconName} me-2` : "d-none"
    const icon:React.ReactNode = <i className={iconClasses}/>
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
            <h5>{icon}{heading}</h5>
          </button>
        </h2>
        <div 
            id={collapseId} 
            className="accordion-collapse collapse" 
            aria-labelledby={headerId} 
            data-bs-parent={`#${parentId}`}>
          <div className="accordion-body">
            {body}
          </div>
        </div>
      </div>
  )
}


export const Accordion: React.FC<AccordionProps> = ({ id,  items }) => {
    return (
        <div className="accordion" id={id}>
      {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            id={item.id} 
            heading={item.heading} 
            body={item.body} 
            parentId={id}
            iconName={item.iconName}
            />
          ))}
    </div>
  )
}
