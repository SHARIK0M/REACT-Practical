const redux=require("redux")
const createStore=redux.createStore
const combineReducers=redux.combineReducers
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM ="BUY_ICECREAM"


const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIceCreams:20
}
function buyCake(){
    return {
        type:BUY_CAKE
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}
const cakeReducer=(state = initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {...state,numOfCakes:state.numOfCakes-1}
        default:
            return state
    }
}
const iceCreamReducer=(state = initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,numOfIceCreams:state.numOfIceCreams-1}
        default:
            return state
    }
}
//by using the combineReducers we specify the reducer as key values.
const rootReducers=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducers) //store will only take one reducer
console.log("current state",store.getState())
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()