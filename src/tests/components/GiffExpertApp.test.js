import '@testing-library/jest-dom';
import '@testing-library/dom';
import { shallow } from 'enzyme';
import GiffExpertApp from '../../GiffExpertApp';
import React from 'react';


describe('Pruebas en <GiffExpertApp />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow( <GiffExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GiffExpertApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    

})
