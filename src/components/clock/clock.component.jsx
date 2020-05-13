import React, { Component } from 'react'

import Typical from 'react-typical'

export class TypicalText extends Component {
  render () {
    return (
      <Typical
        steps={['“Sometimes our stop-doing list needs to be bigger than our to-do list.”', 1000, '“The only thing more important than your to-do list is your to-be list.”', 1000,'“It is a waste of time not to do the most effective, useful, or important thing you can do.”',1000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}
