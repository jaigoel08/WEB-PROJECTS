const Display= ({textToShow}) => {
return <>
<div>{textToShow ? <p>{textToShow}</p> : <p>0</p>}</div>

</>
}
export default Display