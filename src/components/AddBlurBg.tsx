import {styled} from "styled-components"
import lensFlare from "../assets/images/landingPage/hero/Purple-Lens-Flare-3.png"

const AddBlurBg = styled.div<AddBlurBgProps>`
    background-image: url(${lensFlare});
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    background-size: ${props => props.size ? props.size + "px" : "800px"};
    background-position: ${props => props.position ? `${props.position[0]} ${props.position[1]}` : `left 100%`};
`

export default AddBlurBg

interface AddBlurBgProps extends React.FC<React.HTMLProps<HTMLDivElement>> {
    size?: number,
    position?: [string | number, string | number]
}