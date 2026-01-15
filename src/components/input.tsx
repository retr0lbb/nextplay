
interface InputProps extends React.ComponentProps<"input"> {}

export function Input({className, ...rest}: InputProps){
    return(
        <input className="" {...rest} />
    )
}