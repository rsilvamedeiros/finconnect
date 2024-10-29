// app/components/AntdStyleProvider.tsx
"use client";

import { StyleProvider, createCache } from '@ant-design/cssinjs';
import React from 'react';

const AntdStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = createCache();
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdStyleProvider;
