/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import { connect } from 'react-redux';    //connect is high order component
import ServiceItem from '../components/service/ServiceItem';
import Hero from '../components/Hero';
import { fetchServices } from '../actions';

class Home extends React.Component {
  
  state = {
    services: []
  }

  componentDidMount() {
  
    this.props.fetchServices()
  }

renderServices = (services) => services.map(service => <ServiceItem key = {service.id} service = {service}/> )
  

  render() {
    const { services } = this.props 
      return (
        <div>
          <Hero />
          <section className="section section-feature-grey is-medium">
            <div className="container">
              <div className="title-wrapper has-text-centered">
                <h2 className="title is-2">Knowledge Comes </h2>
                <h3 className="subtitle is-4 is-muted">With Opportunities</h3>
                <div className="divider is-centered"></div>
              </div>

              <div className="content-wrapper">
                <div className="columns is-multiline"> 
                  { this.renderServices(services) }
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({services: state.services.all})

export default connect(mapStateToProps, {fetchServices} )(Home)