import profileReducer, {AddPostActionCreator, DeletePostActionCreator} from './ProfilePage-Reducer';

let state: any = {
    postData: [
        {id: 1, post: 'Hi, how are you?', CounterLike: 15},
        {id: 2, post: 'It\'s my first post!', CounterLike: 20}
    ]
}

it('length postData should be increment', () => {

    let action = AddPostActionCreator('New test post')


    let newState = profileReducer(state, action)

    expect(newState.postData.length).toEqual(3)

});
it('New post text should be "New test post"', () => {

    let action = AddPostActionCreator('New test post')

    let newState = profileReducer(state, action)

    expect(newState.postData[2].post).toBe('New test post')
});
it('New post CounterLike should be 0', () => {

    let action = AddPostActionCreator('New test post')

    let newState = profileReducer(state, action)

    expect(newState.postData[2].CounterLike).toBe(0)
});

it('After deleting length of postData  should be decrement', () => {

    let action = DeletePostActionCreator(1)

    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(1)
});

it('After deleting length of postData  should not be decrement if ID is incorrect', () => {

    let action = DeletePostActionCreator(10000)

    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(2)
});