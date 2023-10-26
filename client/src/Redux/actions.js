import axios from "axios";
/*export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";*/

export const GET_DOGS = "GET_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS";
//export const GET_ORDER_RAZA = "GET_ORDER_RAZA";
export const SET_FILTER = "SET_FILTER";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

const getDogs = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`http://localhost:3001/dogs`);
            /*console.log("DATOSSS: " + data[0].weight.imperial);*/
            return dispatch({
                type: GET_DOGS,
                payload: data
            });
        } catch (error) {
            console.log(error)
            window.alert(error.response.data.message);
        }
    };
};

const getDogsByName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`http://localhost:3001/dog?name=${name}`);
            /*console.log("DATOSSS: " + data[0].weight.imperial);*/
            return dispatch({
                type: GET_DOGS_BY_NAME,
                payload: data
            });
        } catch (error) {
            window.alert(error.response.data.message);
        }
    };
};

const setFilters = (filter) => {
    return (dispatch) => {
        return dispatch({
            type: SET_FILTER,
            payload: filter
        });
    }
}

const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`http://localhost:3001/temperaments`);
            /*console.log("TEMPERAMENTOS: " + data[0].name);*/
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data
            });
        } catch (error) {
            window.alert(error.response.data.message);
        }
    };
};

export {
    getDogs,
    getDogsByName,
    setFilters,
    getTemperaments
};