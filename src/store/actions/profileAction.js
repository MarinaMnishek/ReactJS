
export const CHANGE_NAME = "PROFILE::CHANGE_NAME"
export const CHANGE_IS_NIK = "PROFILE::CHANGE_IS_NIK"
export const CHANGE_NIK_NAME = "PROFILE::CHANGE_NIK_NAME"

export const changeName=(name) =>({
    type: CHANGE_NAME,
    payload: {
        name: name,
    }
})
export const changeIsNik=(isNik) =>({
    type: CHANGE_IS_NIK,
    payload: {
        isNik: isNik,
    }
})
export const changeNikName=(nikName) =>({
    type: CHANGE_NIK_NAME,
    payload: {
        nikName: nikName,
    }
})