import {CHANGE_USERNAME, 
    CHANGE_PASSWORD,
    NAME_ERROR,
    PASSWORD_ERROR, 
    VALIDATED_PASSWORD,
    VALIDATED_NAME,
    ADMIN_LOGIN,
} from '../actions/login_actions';

const initialState = {
    admin: false,
    user: '',
    password: '',
    nameError: false,
    passwordError: false,
    nameDidValidated: false,
    passwordDidValidated: false,

};

export const loginReducer = ( state = initialState, action ) => {
    switch (action.type){
    case CHANGE_USERNAME :
        return{
            ...state,
            user: action.value
        };
    case CHANGE_PASSWORD :
        return{
            ...state,
            password: action.value
        };
    case NAME_ERROR :
        return{
            ...state,
            nameError: action.toggle
        };
    case PASSWORD_ERROR :
        return{
            ...state,
            passwordError: action.toggle
        };
    case VALIDATED_NAME :
        return{
            ...state,
            nameDidValidated: action.toggle
        };
    case VALIDATED_PASSWORD :
        return{
            ...state,
            passwordDidValidated: action.toggle
        };
    case ADMIN_LOGIN :
        return{
            ...state,
            admin: true,
        };
    default: return state;
    }
};