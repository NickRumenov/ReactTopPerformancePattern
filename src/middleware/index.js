import {fetchTop4Leagues} from "../actions";

export const loadHomePage = () => {
    return function (dispatch, getState) {

        fetch('http://localhost:8080/top4')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return dispatch(
                    fetchTop4Leagues(JSON.stringify(json))
                )
            });


    };
}