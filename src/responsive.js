import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 415px)  {
            ${props}
    }
    `
}

export const SurfaceDuo = (props) => {
    return css`
        @media only screen and (max-width: 540px)  {
            ${props}
    }
    `
}
export const GalaxyFold = (props) => {
    return css`
        @media only screen and (max-width: 280px)  {
            ${props}
    }
    `
}