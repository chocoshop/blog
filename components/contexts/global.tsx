// todo: componentsの下においておくには不自然なので適当な場所に移動したい

import theme from '../../components/variables/theme';
import { createContext } from 'react';

export const ThemeContext = createContext(theme);