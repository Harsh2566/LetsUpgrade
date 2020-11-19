import React, { useState } from 'react';
import withauthorization from '../../components/hoc/withAuthorization';
import { Redirect, redirect } from 'react-router-dom';
import { createService } from '../../actions';


const ServiceCreate = ({auth}) => {


    const [ redirect, setRedirect ] = useState(false)
    const [ serviceForm, setServiceForm ] = useState({
        category: 'competitive_challenges',
        title: '',
        description: '',
        image: '',
        start_date: '',
        end_date: '',
        team_limit: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setServiceForm({...serviceForm, [name]: value})
    }

    const handleSubmit = () => {
        const { user } = auth
        createService(serviceForm, user.uid)
       .then(() => setRedirect(true))
       .catch(() => alert('SOME ERROR!'))
    }

    if ( redirect ) { return <Redirect to="/" /> }
    return (
        <div className="create-page">
            <div className="container">
                <div className="form-container">
                    <h1 className="title has-text-centered">CREATE COMPETITION</h1>
                    <form>
                        <div className="field">
                            <label className="label">Category</label>
                                <div className="control">
                                    <div className="select">
                                        <select name="category" onChange={handleChange}>
                                            <option value="competitive_challenges">Competitive Challenges</option>
                                            <option value="hackathons">Hackathons</option>
                                            <option value="university_challenges">University Challenges</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input
                                    onChange={handleChange}
                                    name="title"
                                    className="input"
                                    type="text"
                                    placeholder="Text input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea
                                        onChange={handleChange}
                                        name="description"
                                        className="textarea"
                                        placeholder="Textarea">
                                    </textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image Url</label>
                                <div className="control">
                                    <input
                                    onChange={handleChange}
                                    name="image"
                                    className="input"
                                    type="text"
                                    placeholder="Text input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Start Date</label>
                                <div className="control">
                                    <input
                                    onChange={handleChange}
                                    name="start_date"
                                    className="input"
                                    type="text"
                                    placeholder="Text input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">End Date</label>
                                <div className="control">
                                    <input
                                    onChange={handleChange}
                                    name="end_date"
                                    className="input"
                                    type="text"
                                    placeholder="Text input" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Team Limit</label>
                                <div className="control">
                                    <input
                                    onChange={handleChange}
                                    name="team_limit"
                                    className="input"
                                    type="text"
                                    placeholder="Text input" />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button onClick={handleSubmit} type="button" className="button is-link">
                                        Create
                                    </button>
                                </div>
                                <div className="control">
                                <button className="button is-text">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withauthorization(ServiceCreate)