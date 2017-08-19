## react-notification

> A small component for react

The component is used for the small tip such as unread information.

The props of the component as below

### count[:Number]

The number to show

### maxCount[:Number]

The max number to show, if the count is larger than maxCount, it will replace with `count+`

### showAsDot[:Boolean]

show as a dot whatever the count is

### showZero[:Boolean]

if true, show the badge when count is zero

### classNames[:String, :Array]

The class name defined by own applied on the element

### clearable[:Boolean]

if true, hide the badge when clicked

### clickToClear[:Function]

the callback when badge clicked

Therefore, we can use the component as below:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './badge'

class App extends React.Component{
    render() {
        return (
            <div>
                <Badge clickToClear={() => console.log('clear')}>
                    
                </Badge>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

```