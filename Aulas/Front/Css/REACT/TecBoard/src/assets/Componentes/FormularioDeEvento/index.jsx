import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeFormulario } from '../CampoDeFormulario';
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeEntrada } from '../CampoDeEntrada';
import { Botao } from '../Botão';
import { ListaSuspensa } from '../ListaSuspensa';
import { Banner } from '../Banner';
import { CardEvento } from '../CardEvento';


export function FormularioDeEvento( {temas, aoSubmeter} ) {


  return (
    <form className='form-evento'>
      <TituloFormulario> Preencha para criar um evento:</TituloFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor='capa'>Qual é o nome do evento</Label>

          <CampoDeEntrada type="text" id='nome' placeholder='Sumer dev hits' />
        </CampoDeFormulario>


        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>Qual é o nome do evento</Label>

          <CampoDeEntrada type="date" id='nome' placeholder='dataEvento' />
        </CampoDeFormulario>


        <CampoDeFormulario>
          <Label htmlFor='tipoEvento'>Qual é o tipo de evento</Label>
          <ListaSuspensa id='tema' name='tema' itens={temas}/>

          <ListaSuspensa />
        </CampoDeFormulario>

      </div>

      <div className='acoes'>
        <Botao>
          Criar evento
        </Botao>
      </div>







    </form>
  )


}
