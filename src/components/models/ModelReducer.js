const initialState = null

const ModelReducer = (state=initialState,actions) =>{   
    switch(actions.type){
        case 'OPEN_MODEL' : {
            return {
                modelType:actions.payload.modelType,
                modalProps:actions.payload.modalProps
            }           
        }
        case 'CLOSE_MODEL' : {
            return null   
        }
        default : {
            return state
        }
    }
}
export default ModelReducer