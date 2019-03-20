import { CHANGE_USERNAME,
    CHANGE_PASSWORD,
    NAME_ERROR,
    PASSWORD_ERROR,
    VALIDATED_PASSWORD,
    VALIDATED_NAME,
    ADMIN_LOGIN
} from '../actions/login_actions';

export const changeUsername = (value) => ({
    type: CHANGE_USERNAME,
    value
});

export const changePassword = (value) => ({
    type: CHANGE_PASSWORD,
    value
});

export const nameError = (toggle) => ({
    type: NAME_ERROR,
    toggle
});

export const passwordError = (toggle) =>({
    type: PASSWORD_ERROR,
    toggle
});

export const validatedName = (toggle) => ({
    type: VALIDATED_NAME,
    toggle
});

export const validatedPassword = (toggle) => ({
    type: VALIDATED_PASSWORD,
    toggle
});

export const logedAsAdmin = () => ({
    type: ADMIN_LOGIN
});