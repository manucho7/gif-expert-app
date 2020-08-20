import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
import "@testing-library/dom";
import '@testing-library/jest-dom';


describe('Pruebas en <GifGridItem/>', () => {
    
    test('debe de mostrar el componente correctamente', () => {

        const wrapper = shallow( <GifGridItem /> )

        expect( wrapper ).toMatchSnapshot();

    })


})
