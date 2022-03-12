import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component', () => {

  let wrapper

  beforeEach(()=>{
    wrapper = shallowMount(Indecision)
  })

  test('debe de hacer match con el snaphot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('escribir en el input no debe de disparar nada (console.log)', () => {

  })

  test('escribir el simbolo de "?" debe de disparar el fetch', () => {
    
  })

  test('pruebas en getAnswer', () => {
    
  })

  test('pruebas en getAnswer - Fallo en el API', () => {
    
  })

})