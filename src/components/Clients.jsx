import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (

    <section id='clients' className={`${styles.flexCenter} my-4`}>
       
      <div className={`${styles.flexCenter} flex-wrap w-full   `}>
        {clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]  `}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contai hover:opacity-70' />
            </div>
        ))}
      </div>

    </section>
)
export default Clients