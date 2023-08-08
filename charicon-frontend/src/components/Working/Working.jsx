import React from 'react'
import './working.css'
import find from '../../assets/Search (2).png'
import details from '../../assets/View Details.png'
import donate from '../../assets/Charity.png'
import Card from '../Card'

function Working() {
    const items = [
        {
            image: find,
            title: 'Find NGO',
            desc: 'Discover reputable NGOs from our curated list of verified organizations.'
        },
        {
            image: details,
            title: 'Fill Details',
            desc: 'Enter your information and the details of the items you want to donate.'
        },
        {
            image: donate,
            title: 'Donate',
            desc: 'Relax while the NGO contacts you to arrange a convenient pickup time.'
        }
    ]
  return (
    <section id="working">
        <div className="container working-section">
            <div className="section-heading">How it <span style={{color: 'var(--color-primary)'}}>Works?</span></div>
            
                <Card items={items} />
            
        </div>
    </section>
  )
}

export default Working