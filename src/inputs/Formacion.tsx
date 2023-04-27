import {FormSelect} from "../Components/FormSelect";

function Formacion() {

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
          selected="0"
        />
      </div>
    );
}

export default Formacion;