import styled from 'styled-components'

type LinkProps = {
  active: boolean
}

export const LinkSection = styled.div<LinkProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.active ? '#45484A' : '#7D7D7D')};
  margin-bottom: 0.31rem;

  &:hover {
    color: #1366e2;

    svg {
      color: #1366e2;
    }
  }

  svg {
    margin-right: 0.75rem;
    color: ${(props) => (props.active ? '#1366E2' : '#7D7D7D')};
  }
`

export const MainLink = styled.span`
  letter-spacing: 0px;
  font-size: 1rem;
  text-align: left;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.93rem;
`

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0.31rem 2.12rem;
  font-size: 0.87rem;
`
