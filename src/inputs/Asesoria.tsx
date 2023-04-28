import { FormNumber } from "../Components/FormNumber";

function Asesoria() {
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
                />
            <FormNumber 
                id="asesoria-magister"
                label="Magister"
                defaultValue={0}
                minValue={0}
                inputClass="mb-3"
                />
            <FormNumber 
                id="asesoria-titulo"
                label="Bachiller o Título Profesional"
                defaultValue={0}
                minValue={0}
                inputClass="mb-3"
            />
        </div>
     );
}

export default Asesoria;