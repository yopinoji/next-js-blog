import { css } from '@emotion/react'

import { theme } from '@/theme/index'

export const style = css`
  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0.5rem 0;
    overflow: scroll;
    li {
      list-style-type: none;
      width: 100%;
      .nav_button {
        display: block;
        margin: auto;
        font-size: ${theme.fontSizes.S};
        width: 4.8rem;
        &:hover:before {
          bottom: -0.5rem;
          border: solid ${theme.colors.secondaryColor};
          border-width: 0.5rem 0;
        }
      }
    }
  }
`