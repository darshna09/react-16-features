import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
    const name = useValue('Mary');
    const surname = useValue('Poppins')
    const width = useWindowResize();
    useDocumentTitle(`${name.value} ${surname.value}`);

    return (
        <div>
            <div className="form__element">
                <div className="form__label">Name</div>
                <input className="form__input" {...name} />
            </div>
            <div className="form__element">
                <div className="form__label">Surname</div>
                <input className="form__input" {...surname} />
            </div>
            <div className="form__class">
                <div className="form__label">Width</div>
                <div className="form__input form__text" >{width}</div>
            </div>
        </div>
    );
}

// Custom Hooks: Should start with "use"
// There is ESLINT rule because hooks cannot come inside conditions.

// Name
function useValue (initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

// Document title
function useDocumentTitle (title) {
    useEffect(() => {
        document.title = title;
    });
}

// Window Resize
function useWindowResize () {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        // Cleanup - React will call this function after the side effect.
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return width;
}

export default FunctionalComponent;
