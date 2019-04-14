import React from 'react';
import {FlashStyle} from './styled'

const Flash = ({message}) => (
    <FlashStyle 
    >
      {message}
    </FlashStyle>
)

export default Flash