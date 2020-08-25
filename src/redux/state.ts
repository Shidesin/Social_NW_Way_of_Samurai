import {rerenderEntireTree} from '../render';

export type MessageDataType = {
    id: number
    message: string
    classMsg?: string
}
export type DialogDataType = {
    id: number
    name: string
    avatar: string
}
export type PostDataType = {
    id: number
    post: string
    CounterLike: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogPageType ={
    dialogData: Array<DialogDataType>
    messageData: Array<MessageDataType>
}
export type friendsDataType = {
    id: number
    name: string
    avatar: string
}
export type sidebarType = {
    friendsData: Array<friendsDataType>  }
export type RootStateType ={
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: sidebarType
}

let state: RootStateType = {
    profilePage :{
        postData:[
            {id: 1, post: 'Hi, how are you?', CounterLike: 15},
            {id: 2, post: 'It\'s my first post!', CounterLike: 20}
        ],
        newPostText: ''
    },
    dialogPage: {
        dialogData: [
            {id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'},
            {id: 2, name: 'Andrey', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'},
            {id: 3, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'}
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'}
        ]
    },
    sidebar: {
        friendsData: [
            {id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGlQXWqbQZJOfxE7MtMvIs9--VPgCp-dHPGA&usqp=CAU'},
            {id: 2, name: 'Andrey', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU'},
            {id: 3, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFL5jonyCNC78_Ao6k1IXgS1JdSAFnJhR-bQ&usqp=CAU'}
        ]
    }


};

export let addPost = () => {
    let newPost: PostDataType  = {
        id: 5,
        post: state.profilePage.newPostText,
        CounterLike: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;