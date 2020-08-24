import '@testing-library/dom';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial ', () => {

        const { result } = renderHook( () => useFetchGifs( '420' ) );
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    });
    

})
