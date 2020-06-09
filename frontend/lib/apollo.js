import { HttpLink } from 'apollo-link-http'
import { withData } from 'next-apollo'

const config = {
  link: new HttpLink({
    uri: 'https://secure-sea-74962.herokuapp.com/graphql', // Server URL (must be absolute)
  }),
}
export default withData(config)
