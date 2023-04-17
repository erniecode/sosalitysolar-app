const initialState = {
    proposals: [],

}

export const ActionTypes = {
    SET_PROPOSALS: 'SET_PROPOSALS',
    NEW_PROPOSAL: 'NEW_PROPOSAL',
    EDIT_PROPOSAL: 'EDIT_PROPOSAL',
    DELETE_PROPOSAL: 'DELETE_PROPOSAL',
}

export const ActionCreators = {
    setProposals: payload => ({ type: ActionTypes.SET_PROPOSALS, payload }),
    newProposal: payload => ({ type: ActionTypes.NEW_PROPOSAL, payload }),
    editProposal: payload => ({ type: ActionTypes.EDIT_PROPOSAL, payload }),
    deleteProposal: payload => ({ type: ActionTypes.DELETE_PROPOSAL, payload }),

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PROPOSALS:
            return { ...state, proposals: [...action.payload] };
        case ActionTypes.NEW_PROPOSAL:
            return { ...state, proposals: [action.payload, ...state.proposals] }
        case ActionTypes.EDIT_PROPOSAL:
            var proposals = state.proposals.map(proposal => {
                if (proposal.id === action.payload.id) {
                    proposal = action.payload;
                }
                return proposal;
            })
            return { ...state, proposals: [...proposals] };
        case ActionTypes.DELETE_PROPOSAL:
            var proposals = state.proposals.filter(proposal =>
                proposal.id !== action.payload.id);
            return { ...state, proposals: [...proposals] };
        default:
            return state;
    }
}