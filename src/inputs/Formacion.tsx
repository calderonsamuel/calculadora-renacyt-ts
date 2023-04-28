import {FormSelect, FormSelectProps} from "../Components/FormSelect";
import { useState } from "react";

function Formacion() {

  const [gradoAcademico, setGradoAcademico] = useState<string | undefined>('0');

  const handleGradoAcademicoChange = (value: string) => {
    setGradoAcademico(value);
  };
  

  const options = [
    { value: "0", label: "Ninguno" },
    { value: "1", label: "Estudiante matriculado" },
    { value: "2", label: "Bachiller o egresado" },
    { value: "4", label: "Título profesional" },
    { value: "6", label: "Magister" },
    { value: "10", label: "Doctor" },
  ];

  return ( 
      <div>
        <FormSelect 
          id="grado" 
          label="A. Grado académico (registrado en SUNEDU o MINEDU)" 
          options={options} 
          selected={gradoAcademico}
          onChange={handleGradoAcademicoChange}
        />
      </div>
    );
}

export default Formacion;