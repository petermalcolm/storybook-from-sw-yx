import React from 'react'
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text } from '@storybook/addon-knobs/react';
import { boolean } from '@storybook/addon-knobs/dist/deprecated';

storiesOf('Button', module).addWithJSX('with background', withInfo(`lovely description here!`)(() => (
    <Button bg='palegoldenrod'>Hello World</Button>
))).addWithJSX('with background 2', withInfo(`even lovelier description here!!`)(() => (
    <Button disabled={boolean('disabled',false)} bg={text('bg','green')}>Hello World</Button>
)));