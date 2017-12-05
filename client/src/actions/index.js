import axios from 'axios'

export const FETCH_MEMBERS = 'fetch_members'
export const FETCH_IDEAS = 'fetch_ideas'
export const SUBMIT_IDEA = 'submit_idea'

export const fetchMembers = () => async dispatch => {
  const res = await axios.get('/api/members')

  dispatch({ type: FETCH_MEMBERS, payload: res.data })
}

export const fetchIdeas = () => async dispatch => {
  const res = await axios.get('/api/ideas')

  dispatch({ type: FETCH_IDEAS, payload: res.data })
}

export const newIdeaSubmit = (values, history) => async dispatch => {
  const res = await axios.post('/api/ideas', values)
  history.push('/')
  dispatch({ type: SUBMIT_IDEA, payload: res.data })
}
