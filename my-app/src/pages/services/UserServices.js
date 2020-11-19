import React from 'react';
import withAuthorization from '../../components/hoc/withAuthorization';
import ServiceItem from '../../components/service/ServiceItem';
import { fetchUserServices } from '../../actions';


class UserServices extends React.Component {

  componentDidMount() {
    const { auth: { user }, dispatch } = this.props
    dispatch(fetchUserServices(user.uid))
  }


  render() {
      const { services } = this.props.auth.user
    return (
      <div className="container">
        <div className="content-wrapper">
          <div className="columns is-multiline">
            {
                services.map(s => (
                    <div key={s.id} className="column">
                        <ServiceItem service={s} />
                    </div>
                )
                )
            }
          </div>
        </div>
      </div>
    )
  }
}


export default withAuthorization(UserServices)