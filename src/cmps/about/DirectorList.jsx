import React from 'react'
import { DirectorPreview } from './DirectorPreview'

export function DirectorList({ directors }) {
  return (
    <section className="director-list all-directors">
      {
        directors.map(director => <DirectorPreview key={director._id} director={director} />)
      }
    </section>
  )
}
