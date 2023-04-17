import { ActionCreators } from '../app/proposalsReducer';

export const GetProposals = async (dispatch) => {
    try{
        // api call
        const proposals = [
            
                {id: 1, description: 'margarita juarez', amount: 23.16},
                {id: 2, description: 'Juan Perez', amount: 23.16},
                {id: 3, description: 'Manuel Sauceda', amount: 23.16}
            
        ];

        dispatch(ActionCreators.setProposals(proposals));
    } catch {
        console.log('Error!');
    }
}

export const NewProposal = async (dispatch, proposal) => {
    try{
        //api call
        dispatch(ActionCreators.newProposal({id: proposal.id, description: proposal.description, amount: proposal.amount}));
    }
    catch{
        console.log('Error!');
    }
}

export const EditProposal = async (dispatch, proposal) => {
    try {
        //api call
        dispatch(ActionCreators.editProposal(proposal))
    }
    catch{
        console.log('Error!');
    }
}

export const DeleteProposal = async (dispatch, proposal) => {
    try{
        //api call
        dispatch(ActionCreators.deleteProposal(proposal))
    }
    catch{
        console.log('Error!');
    }
}