const redux = require('redux')
const createStore = redux.createStore


const BuyCake  = 'BUY_CAKE'


function buyCake(){
    return {
        type:BuyCake
    }
}


let inital = {
    count : 10
}



function reducer(state=inital,action){
    switch(action.type){
        case 'BUY_CAKE':
            return {...state,count:state.count+1}
        default:
  return state;

    }
}


const store = createStore(reducer)


console.log("Initial State:", store.getState());

store.dispatch(buyCake())

console.log("Initial State:", store.getState());


// ----------------------------------------------------------------------------------------------------------------------------

