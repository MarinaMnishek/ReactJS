import firebase from 'firebase'

export const CHANGE_NAME = "PROFILE::CHANGE_NAME"
export const CHANGE_IS_NIK = "PROFILE::CHANGE_IS_NIK"
export const CHANGE_NIK_NAME = "PROFILE::CHANGE_NIK_NAME"
export const CHANGE_IS_AUTHED = "PROFILE::CHANGE_IS_AUTHED"

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name: name,
    }
})
export const changeIsNik = (isNik) => ({
    type: CHANGE_IS_NIK,
    payload: {
        isNik: isNik,
    }
})
export const changeNikName = (nikName) => ({
    type: CHANGE_NIK_NAME,
    payload: {
        nikName: nikName,
    }
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})


// export const changeNameInDatabase = (name) => {
//     return () => {
//         firebase.database().ref('profile').child(name).update({name})
//     }
// }

// export const changeNameInDatabase = (name) => {
//     return async (dispatch) => {
//         try {
//             await firebase.database().ref('profile').child(name).push({ name })
//             dispatch(changeName(name))
//         } catch (error) {
//             console.error(error.message)
//         }
//     }
// }

// export const changeNameWithFirebase = (name) => {
//     return (dispatch, getState) => {
//         firebase.database().ref('profile').child(name).on('child_added', (snapshot) => {
//             dispatch(changeName(snapshot.val()))
//         })

//         firebase.database().ref('profile').child(name).on('child_changed', (snapshot) => {
//             dispatch(changeName(snapshot.val()))
//         })
//     }
// }