import { useRef } from 'react';
import { ControlledMenu, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';
import { Title } from './styled'

export const HoverMenuWithTransition = ({
  title,
  children,
  to,
}) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  return (
    <div>
      {children ?
        <>
          <Title ref={ref} {...anchorProps}>
            {to && (
              <Link to={to}>{title}</Link>
            )}
            {!to && title}
          </Title>

          <ControlledMenu
            {...hoverProps}
            {...menuState}
            anchorRef={ref}
            onClose={() => toggle(false)}
          >
            {children}
          </ControlledMenu>
        </>
        : 
        <Title>
            {to && (
              <Link to={to}>{title}</Link>
            )}
            {!to && title}
        </Title>
      }
      
    </div>
  )
};