import React, { memo } from 'react';

// memo hook allow us to only invoke our component if the props changes (We could use 'React.memo' too)
export const Small = memo(({ value }) => {
    console.log('Small called');
	return <small>{value}</small>;
})
