import { useMediaQuery } from 'react-responsive'

const Responsive = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  // const isDesktop = useMediaQuery({ query: '(min-width: 640px)' })

  if (isMobile) {
    return props.mobile
  }

  return props.desktop
}

export default Responsive
