
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Events() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <section class="container mx-auto px-24 md:px-12 mb-58">
        <h1>Events</h1>
      </section>

    </>
  );
}

export default Events;
