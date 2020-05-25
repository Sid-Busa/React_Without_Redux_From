export const openModel = (modelType,modalProps) => {
    return{
        type :'OPEN_MODEL',
        payload: { modelType,modalProps }
    }
}

export const closeModel = () => {
    return{
        type :'CLOSE_MODEL'
    }
}