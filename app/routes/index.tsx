import type {LinksFunction  } from '@remix-run/node'

import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: stylesUrl }]
}

const IndexRoute = () => { 
    return (
        <div>
        <h1>Index</h1>
        </div>
    )
 }

export default IndexRoute