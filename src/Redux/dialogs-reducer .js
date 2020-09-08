const addDialogMessege = 'ADD-DIALOG-MESSEGE';

let initialState = {
    DialogData: [
        { id: 0, name: 'dima' },
        { id: 1, name: 'olya' },
        { id: 2, name: 'vanya' },
        { id: 3, name: 'alex' }
    ],
    MessegeData: [
        { id: 0, name: 'olya' },
        { id: 1, name: 'vanya' },
        { id: 2, name: 'alex' },
        { id: 4, name: 'sasha' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addDialogMessege:
            let body = action.NewDialogMessege;
            return {

                ...state,
                MessegeData: [...state.MessegeData, { id: 3, name: body }]
            }
        default:
            return state;
    }
}

export const addDialogMesseges = (NewDialogMessege) => ({ type: addDialogMessege, NewDialogMessege })
export default dialogsReducer;