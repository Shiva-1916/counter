const CustomImage=(props)=>{
    
    let {source,alternateText='image_not_found',width=200,height=200}=props
    return (
        <img src={source} alt={alternateText} width={width} height={height}/>
    )
}
export default CustomImage