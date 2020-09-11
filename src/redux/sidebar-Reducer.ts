import {ActionTypes, friendsDataType} from './store';




export type initialStateSidebarType = typeof initialState

let initialState = {
    friendsData: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'
        }
    ] as Array<friendsDataType>
}

const sidebarReducer = (state: initialStateSidebarType = initialState, action: ActionTypes): initialStateSidebarType => {
    return state
}

export default sidebarReducer;