import React from 'react';
import Content from '@theme-original/DocItem/Content';
import CopyMarkdown from '@site/src/components/CopyMarkdown';

// Wraps every doc page with the copy-as-Markdown affordance (t08).
export default function DocItemContentWrapper(props: Record<string, unknown>): React.ReactNode {
  return (
    <>
      <CopyMarkdown />
      <Content {...props} />
    </>
  );
}
