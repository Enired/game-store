import "../style/Button.scss"

export const Button = (props) => {

  return (
    <button className={props.primary}>{props.label}</button>
  )
}