/*import { ADD_FAV } from "./actions";
import { REMOVE_FAV } from "./actions";
import { FILTER, ORDER } from "./actions";*/

import { GET_DOGS, GET_DOGS_BY_NAME, SET_FILTER,/*GET_ORDER_RAZA,*/ GET_TEMPERAMENTS } from "./actions";

const initialState = {
    allDogs: [],
    /*filterDogs: [],*/
    temperaments: [],
    filterObject: {
        temperamentOrder: "none",
        origen: "none",
        order: "none"
    }
    /*myFavorites: [],
    allCharacters: []*/
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DOGS:
            let auxDogs = action.payload;
            if(state.filterObject.order === "R_A" || state.filterObject.order === "R_D") {
                auxDogs = auxDogs.sort((a,b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (state.filterObject.order === "R_A") {
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                    } else {
                        if (nameA > nameB) {
                            return -1;
                        }
                        if (nameA < nameB) {
                            return 1;
                        }
                    }
                    return 0;
                });
            }
            else if(state.filterObject.order === "P_A" || state.filterObject.order === "P_D"){
                /*auxDogs.forEach(dog => {
                    console.log("Name: " + dog.name + ", dog.weight.metric: " + dog.weight.metric);
                });*/
                auxDogs = auxDogs.map((dog) => {
                    //console.log("dog.height.metric: " + dog.weight.metric);
                    const auxArray = dog.weight.metric.split(" - ");
                    auxArray[0] = auxArray[0] === "NaN" || auxArray[0] === undefined ? 0 : auxArray[0];
                    auxArray[1] = auxArray[1] === "NaN" || auxArray[1] === undefined ? 0 : auxArray[1];
                    //auxArray.length === 0 ? auxArray.push(100) : "";
                    //const weightAverage = auxArray.length > 1 ? (parseInt(auxArray[0]) + parseInt(auxArray[1])) / 2 : parseInt(auxArray[0]);
                    const weightAverage = auxArray.length > 1 ? Math.round((parseInt(auxArray[0]) + parseInt(auxArray[1])) / 2) : parseInt(auxArray[0]);

                    //console.log(dog.name + ", auxArray[0]: " + auxArray[0] + ", auxArray[1]: " + auxArray[1] + ", weightAverage: " + weightAverage);
                    return {
                        ...dog,
                        weightAverage: weightAverage
                    };
                });

                auxDogs = auxDogs.sort((a,b) => {
                    if (state.filterObject.order === "P_A") {
                        return a.weightAverage - b.weightAverage;
                    } else {
                        return b.weightAverage - a.weightAverage;
                    }
                });
            }

            if(state.filterObject.temperamentOrder !== "none"){
                const tempeFilter = state.filterObject.temperamentOrder.toLowerCase();
                auxDogs = auxDogs.filter((dog) => {
                    if(dog.hasOwnProperty("temperament")){
                        return dog.temperament.toLowerCase().includes(tempeFilter);
                    }
                });
            }

            if(state.filterObject.origen !== "none"){
                switch(state.filterObject.origen){
                    case "API":
                        auxDogs = auxDogs.filter((dog) => {
                            if(!dog.hasOwnProperty("isDataBase")){
                                return dog;
                            }
                        });
                        break;
                    case "DB":
                        auxDogs = auxDogs.filter((dog) => {
                            if(dog.hasOwnProperty("isDataBase")){
                                return dog;
                            }
                        });
                        break;
                }
            }
            
            return { ...state, allDogs: auxDogs };
            //break;
        case GET_DOGS_BY_NAME:
            let auxDogsByName = action.payload;
            if(state.filterObject.order === "R_A" || state.filterObject.order === "R_D") {
                auxDogsByName = auxDogsByName.sort((a,b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (state.filterObject.order === "R_A") {
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                    } else {
                        if (nameA > nameB) {
                            return -1;
                        }
                        if (nameA < nameB) {
                            return 1;
                        }
                    }
                    return 0;
                });
            }
            else if(state.filterObject.order === "P_A" || state.filterObject.order === "P_D"){
                /*auxDogsByName.forEach(dog => {
                    console.log("Name: " + dog.name + ", dog.weight.metric: " + dog.weight.metric);
                });*/
                auxDogsByName = auxDogsByName.map((dog) => {
                    //console.log("dog.height.metric: " + dog.weight.metric);
                    const auxArray = dog.weight.metric.split(" - ");
                    auxArray[0] = auxArray[0] === "NaN" || auxArray[0] === undefined ? 0 : auxArray[0];
                    auxArray[1] = auxArray[1] === "NaN" || auxArray[1] === undefined ? 0 : auxArray[1];
                    //auxArray.length === 0 ? auxArray.push(100) : "";
                    //const weightAverage = auxArray.length > 1 ? (parseInt(auxArray[0]) + parseInt(auxArray[1])) / 2 : parseInt(auxArray[0]);
                    const weightAverage = auxArray.length > 1 ? Math.round((parseInt(auxArray[0]) + parseInt(auxArray[1])) / 2) : parseInt(auxArray[0]);

                    console.log(dog.name + ", auxArray[0]: " + auxArray[0] + ", auxArray[1]: " + auxArray[1] + ", weightAverage: " + weightAverage);
                    return {
                        ...dog,
                        weightAverage: weightAverage
                    };
                });

                auxDogsByName = auxDogsByName.sort((a,b) => {
                    if (state.filterObject.order === "P_A") {
                        return a.weightAverage - b.weightAverage;
                    } else {
                        return b.weightAverage - a.weightAverage;
                    }
                });
            }

            if(state.filterObject.temperamentOrder !== "none"){
                const tempeFilter = state.filterObject.temperamentOrder.toLowerCase();
                auxDogsByName = auxDogsByName.filter((dog) => {
                    if(dog.hasOwnProperty("temperament")){
                        return dog.temperament.toLowerCase().includes(tempeFilter);
                    }
                });
            }

            if(state.filterObject.origen !== "none"){
                switch(state.filterObject.origen){
                    case "API":
                        auxDogsByName = auxDogsByName.filter((dog) => {
                            if(!dog.hasOwnProperty("isDataBase")){
                                return dog;
                            }
                        });
                        break;
                    case "DB":
                        auxDogsByName = auxDogsByName.filter((dog) => {
                            if(dog.hasOwnProperty("isDataBase")){
                                return dog;
                            }
                        });
                        break;
                }
            }

            return { ...state, allDogs: auxDogsByName };
            //break;
        case SET_FILTER:
            let auxFilter = state.filterObject;
            for(const property in action.payload)
            {
                auxFilter = { ...state.filterObject, [property]: action.payload[property]};
            }
            //console.log("auxFilter: " + JSON.stringify(auxFilter));
            return { ...state, filterObject: auxFilter};
            //break;
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload };
            //break;
        default:
            return {...state};
    }
}

export default rootReducer;