import React from 'react'
import ProposalForm from '../components/proposalForm'
import ProposalsList from '../components/proposalsList'

function proposalsApp() {
  return (
    <div>
      <h1>Proposals</h1>
      <ProposalForm/>
      <hr/>
      <ProposalsList/>
    </div>
  )
}

export default proposalsApp
