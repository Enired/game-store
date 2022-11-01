import "../style/Button.scss"

export const Button = (props) => {

  return (
    <button onClick={()=>props.onClick()}>{props.label}</button>
  )
}