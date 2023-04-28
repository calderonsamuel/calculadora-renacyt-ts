import {useState} from 'react';
import { FormNumber } from "../Components/FormNumber";

function Asesoria() {

    const [values, setValues] = useState<{ [id: string]: number }>({
        "asesoria-doctor": 0,
        "asesoria-magister": 0,
        "asesoria-titulo": 0,
      });
    
    const handleValueChange = (id: string, newValue: number) => {
    setValues((prevValues: any) => ({ ...prevValues, [id]: newValue }));
    };

    return ( 
        <div>
            <h6>F. Haber asesorado o co-asesorado tesis sustentadas y aprobadas</h6>
            <p>Para obtención del grado de:</p>
            <FormNumber 
                id="asesoria-doctor"
                label="Doctor"
                defaultValue={0}
                minValue={0}
                inputClass="mb-3"
                onValueChange={(newValue) => handleValueChange("asesoria-doctor", newValue)}
                />
            <FormNumber 
                id="asesoria-magister"
                label="Magister"
                defaultValue={0}
                minValue={0}
                inputClass="mb-3"
                onValueChange={(newValue) => handleValueChange("asesoria-magister", newValue)}
                />
            <FormNumber 
                id="asesoria-titulo"
                label="Bachiller o Título Profesional"
                defaultValue={0}
                minValue={0}
                inputClass="mb-3"
                onValueChange={(newValue) => handleValueChange("asesoria-titulo", newValue)}
            />
        </div>
     );
}

export default Asesoria;