import './ListaSuspensa.css'

export function ListaSuspensa({ itens }) {
    return (
        <select defaultValue='' className='lista-suspensa-form'>
            <option value=''> Selecione uma opção </option>

            {itens.map(function ({item}) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            })}




            <option value=''>Minas Gerais</option>
            <option value=''>Acre</option>
        </select>
    )
}