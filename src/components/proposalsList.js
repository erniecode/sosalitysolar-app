import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProposals } from '../services/proposals';
import {Button, Row, Col} from 'react-bootstrap'
import ProposalForm from './proposalForm';

export default () => {
    const dispatch = useDispatch();
    const proposals = useSelector(state => state.proposalsReducer.proposals);

    useEffect(() => {
        GetProposals(dispatch);
    }, []);

    return proposals.map(e =>
        <div key={e.id} style={{ marginBottom: '1rem' }}>
            <ListRow striped  proposal={e} />
        </div>

        
    );
}

const ListRow = ({ proposal }) => {
    const [isEditing, setIsEditing] = useState(false);
    return isEditing
    ? <ProposalForm proposal={proposal} setIsEditing={setIsEditing} />
    : 
    <div>
        <center>
            <Row>
                <Col>{proposal.description}</Col>
                <Col>${proposal.amount}</Col>
                <Col><Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button></Col>
            </Row>
        </center>

    </div>

    
}

