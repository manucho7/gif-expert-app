import '@testing-library/jest-dom';
import '@testing-library/dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock( '../../hooks/useFetchGifs' );

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';
    
    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan images useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.com',
            title: 'anything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();

    });
})
