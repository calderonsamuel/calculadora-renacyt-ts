import { FormNumber } from "../Components/FormNumber";

function Asesoria() {
    return ( 
        <div>
            <h6>F. Haber asesorado o co-asesorado tesis sustentadas y aprobadas</h6>
            <FormNumber 
                id="asesoria-doctor"
                label="Para obtención del grado de Doctor"
                defaultValue={0}
                minValue={0}
            />
            <FormNumber 
                id="asesoria-magister"
                label="Para obtención del grado de Magister"
                defaultValue={0}
                minValue={0}
            />
            <FormNumber 
                id="asesoria-titulo"
                label="Para obtención del grado de Bachiller o Título Profesional"
                defaultValue={0}
                minValue={0}
            />
        </div>
     );
}

export default Asesoria;