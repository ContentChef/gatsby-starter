import { createUrl } from '@contentchef/contentchef-node';

export function getImageUrl(publicId) {
    return createUrl(publicId);
}