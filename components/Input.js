import React from 'react';
import { TextInput} from 'react-native';

const Input = props => <TextInput style={{...props.style}} {...props}/>;

export default Input;