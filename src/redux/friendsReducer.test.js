import friendsReducer, {SetPageNumber} from "./friendsReducer";


let state = {
    Friends: [],
    pageSize: 10,
    pageNumber: 1,
    count: 0,
    isLoading: false,
    followIsFetching: []
}


it('should page number correct', ()=> {
    let newNumber=3
    let action=SetPageNumber(newNumber);

    let newState=friendsReducer(state,action)


    expect(newState.pageNumber).toBe(newNumber);
});