import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = ({name}) => {

    /* 
    useState
    const [variable, metodo para actualizarlo] = useState(valor inciial); */
    const [age, setAge] = useState(29);

    const birthday = () =>{
        setAge(age + 1)
    }

    return (
        <div>
            <h1>!HOLA {name} desde componente funcional!</h1>
            <h2>Tu edad es de: {age}</h2>
            <button onClick={birthday}>Cumplir Años</button>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
