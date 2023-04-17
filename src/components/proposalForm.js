import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap"
import { NewProposal, EditProposal, DeleteProposal } from '../services/proposals';
import { useDispatch } from 'react-redux';

export default ({ proposal, setIsEditing }) => {
    const descriptions = ['Groceries', 'Credit Card', 'Student Loans', 'Eating out'];
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewProposal, setIsNewProposal] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (proposal !== undefined) {
            setIsNewProposal(false);
            setAmount(proposal.amount);
        }
        else {
            setIsNewProposal(true);
        }
    }, [proposal])

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if (isNewProposal) {
                //create a new proposal
                NewProposal(dispatch, { description: description, amount: Number(amount) });
            }
            else {
                //edit proposal
                EditProposal(dispatch, {id: proposal.id, description: description, amount: Number(amount) })
                setIsEditing(false);
            }
        }}
    >

        <Row>
            <Col>
                <Form.Label>description</Form.Label>
                <Form.Control as='select' onChange={event => setDescription(event.target.value)}>
                    {descriptions.map((d, idx) => <option key={idx}>{d}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={amount}
                    onChange={event => setAmount(event.target.value)} />
            </Col>
            <div style={{ marginTop: 'auto' }}>
                {
                    isNewProposal
                        ? <Button variant='primary' type='submit'>Add</Button>
                        : <div>
                            <Button style={{ marginRight: '2px' }} variant='danger'
                            onClick={() => DeleteProposal(dispatch, proposal)}>Delete</Button>
                            <Button style={{ marginRight: '2px' }} variant='success' type='submit'>Save</Button>
                            <Button style={{ marginRight: '2px' }} variant='default' onClick={() => setIsEditing(false)}>Cancel</Button>
                        </div>
                }
            </div>
        </Row>
    </Form>
}