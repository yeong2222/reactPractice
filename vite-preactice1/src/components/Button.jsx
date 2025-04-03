const Button = (props) =>{
    const text = props.text
    const color = props.color || "black"
    const onClickButton = ()=>{
        console.log(text)
    }
    return(
        <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        // onClick={()=>{console.log(text)}}
        style={{color:color}}>{text} - {color}
        {props.children}
        </button>
    )
};

export default Button;