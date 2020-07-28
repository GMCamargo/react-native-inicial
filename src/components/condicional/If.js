export default props =>{
    if(props.check){
        return props.children
    }else{
        return false
    }
}