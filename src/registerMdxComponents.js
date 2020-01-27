import styled from 'styled-components';

import { Image as MasterpieceImage, MDXMappings } from 'masterpiece-ui'

const img = styled(MasterpieceImage)`
  max-width: 100%;
`

const components = {
  ...MDXMappings,
  img
}

export default components
