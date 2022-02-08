import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { variables } from './variables';
import { elements } from './elements';

export const GlobalStyles = createGlobalStyle`
	${normalize}
	${variables}
	${elements}
`;
