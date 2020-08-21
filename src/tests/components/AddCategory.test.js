import "@testing-library/jest-dom";
import '@testing-library/react';
import { shallow } from 'enzyme';
import AddCategory from "../../components/AddCategory";
import React from 'react';

describe('Pruebas en <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });
    
    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target : { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('no debe de postear la info on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        //simular el inputChange
        wrapper.find( 'input' ).simulate( 'change', { target: { value } });

        //simular el submit de formulario
        wrapper.find('form').simulate( 'submit', { preventDefault(){} })

        //se debe llamar setCategories una vez
        expect( setCategories ).toHaveBeenCalled();

        //el valor del input debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');


    });

})
