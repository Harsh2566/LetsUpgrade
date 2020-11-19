import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../actions';
import Spinner from '../components/Spinner';
import Modal from '../components/modal';

const ServiceDetail = props => { 
    
    const { serviceId } = useParams()
    const { fetchServiceById, isFetching } = props

    useEffect(() => { 
        fetchServiceById (serviceId)
    }, [serviceId, fetchServiceById])

    const { service } = props

    if (isFetching || serviceId !== service.id) { return <Spinner /> }


    return (
        <section className="hero is-fullheight is-default is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-5">
                            <figure className="image is-4by3">
                                 <img src={service.image} alt="Description" />
                            </figure>
                        </div>
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-2 has-text-black has-text-right">Title: - {service.title}</h1>
                            <h2 className="subtitle is-4 has-text-black has-text-right">Description: - {service.description}</h2>
                            <h2 className="subtitle is-4 has-text-black has-text-right">Category: - {service.category}</h2>
                            <h3 className="subtitle is-4 has-text-black has-text-right">Start_Date: - {service.start_date}</h3>
                            <h3 className="subtitle is-4 has-text-black has-text-right">End_Date: - {service.end_date}</h3>
                            <h3 className="subtitle is-4 has-text-black has-text-right">Team_Limit: - {service.team_limit}</h3>
                            <br />
                            <p className="has-text-centered">
                                <Modal />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ({selectedService}) => (
    {
        service: selectedService.item,
        isFetching: selectedService.isFetching
    }
)


export default connect(mapStateToProps, {fetchServiceById} )(ServiceDetail)