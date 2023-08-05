import { useRef } from 'react';
import { ControlledMenu, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styled from 'styled-components';

const Title = styled.h4`
  white-space: normal;
  color: rgb(136, 136, 136);
  font-size: 16px;
  line-height: 1.2;
  cursor: pointer;
  padding: 20px;
`;

export const HoverMenuWithTransition = ({
  title,
  children,
}) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  return (
    <div>
      {children ?
        <>
          <Title ref={ref} {...anchorProps}>
            {title}
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
          {title}
        </Title>
      }
      
    </div>
  )
};