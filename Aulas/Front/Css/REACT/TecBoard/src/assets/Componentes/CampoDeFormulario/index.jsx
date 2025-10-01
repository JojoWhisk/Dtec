import './campo-formulario.css'

export function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}