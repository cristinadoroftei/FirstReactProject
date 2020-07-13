import React from 'react'

//withClass is a normal javascript method which returns a functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}

export default withClass;