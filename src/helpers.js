import { createUrl } from '@contentchef/contentchef-media';

export function getImageUrl(publicId) {
    return createUrl(publicId);
}