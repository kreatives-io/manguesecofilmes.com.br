import { client } from '@/lib/sanity/lib/client';
import { useNextSanityImage } from 'next-sanity-image';

interface IGeneratedImage {
    src: string;
    width: number;
    height: number;
}

export default function useImageGenerator(imageData: any) {
    const imageProps = useNextSanityImage(client, imageData) as unknown as IGeneratedImage;
    
    return imageProps;
}