import React from 'react'
import { LoadingView, StoryRetrievedView, ReadStoryForm } from '../components'

const ReadStoryBranch = props => {
  const { loading, retrieved, error, story } = props

  if (loading) return <LoadingView />
  if (retrieved) return <StoryRetrievedView story={story} />
  if (error) return <div>I'm sorry, please try again.</div>
  return <ReadStoryForm {...props} />
}

export default ReadStoryBranch
