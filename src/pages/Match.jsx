// src/pages/Match.jsx

import UsersGrid from '../components/UsersGrid'

import { SECTION_STYLES } from '../styles/styles'

export default function Match() {
  return (
    <>
      <h1 className='text-center uppercase text-shadow-lg/50 text-shadow-ink text-secondary'>Ready to Match?</h1>
      <section className={SECTION_STYLES}>
        <UsersGrid cols={3} rows={2} pending={true} />
      </section>
    </>
  )
}
