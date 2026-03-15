import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

const components = {
    h1: ({ children }) => (
        <h1>{children}</h1>
    ),
    img: (props) => (
        <Image
            // alt=""
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            {...(props as ImageProps)}
        />
    ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
    return components
}
