import { FormNumber } from "../Components/FormNumber";
import { FormSelect } from "../Components/FormSelect";

function Produccion() {
    return ( 
        <div>
            <h6>B. Artículos científicos en revistas indizadas</h6>
            <p className="mt-3">Nº de Art. cient. Scopus o Web of Science (Scimago o JCR)</p>
            <div className="row mt-1 px-2">
                <FormNumber id="art_q1" label="Q1" inputClass="col px-1"/>
                <FormNumber id="art_q2" label="Q2" inputClass="col px-1"/>
                <FormNumber id="art_q3" label="Q3" inputClass="col px-1"/>
                <FormNumber id="art_q4" label="Q4" inputClass="col px-1"/>
            </div>
            <p className="mt-3">Conference Proceeding (Scopus o WoS)/Scielo</p>
            <FormNumber id="conf_proceedings" label="Nº"/>

            <h6 className="mt-3">C. Registros de propiedad intelectual, concedidas y registradas en INDECOPI, SCOPUS u otras</h6>
            <FormNumber 
                id="patente_invencion" 
                label="Patente de invención o Certificado de Obtentor o Paquete Tecnológico"
                inputClass="mb-3"
                />
            <FormNumber 
                id="patente_modelo" 
                label="Patente de modelo de utilidad o certificado de derecho de autor por software"
                inputClass="mb-3"
            />

            <h6>D. Publicaciones de libros y/o capítulos de libro indizados</h6>
            <FormNumber 
                id="libros" 
                label="Nº de libros"
                inputClass="mb-3"
            />
            <FormNumber 
                id="capitulos" 
                label="Nº de capítulos de libro"
                inputClass="mb-3"
            />

            <h6>E. Índice H Scopus</h6>
            <FormSelect 
                id="indice_h"
                label="¿Valor del índice H > 10?"
                options={[
                    {value: "0", label: "No"},
                    {value: "1", label: "Sí"}
                ]}
                selected="0"
            />
            
        </div>
     );
}

export default Produccion;