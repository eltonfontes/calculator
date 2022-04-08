
import { ThemeProvider } from 'styled-components';
import { Cores } from '../../theme';

import{Container} from './styles';

import Calculator from '../Calculator';

export default () => {
    return (
        <Container>
            <ThemeProvider theme={Cores.default}>
                <Calculator />
            </ThemeProvider>
            <ThemeProvider theme={Cores.dark}>
                <Calculator />
            </ThemeProvider>
        </Container>
    )
}