import React from 'react'
import PropTypes from 'prop-types'

import "react-table/react-table.css"
//icons

//components
import ReactTable from 'react-table'
import {withStyles} from '@material-ui/core'
import styles from 'base/app/styles'

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    },
  },
]

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name, // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age',
  }]

class UserOverview extends React.Component {
  state = {
    users: [],
    filter: [],
    changes: [],
    searchOptions: {
      sortBy: [],
      order: [],
      limit: 10,
      offset: 0,
    },
  }

  render() {
    return (
        <ReactTable
            data={data}
            columns={columns}
        />

    )
  }
}

UserOverview.propTypes = {
  searchText: PropTypes.string,
}

UserOverview = withStyles(styles)(UserOverview)
export default UserOverview
