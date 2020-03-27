import cloudinary from 'cloudinary-core';

const client = new cloudinary.Cloudinary();

export function createUrl(publicId, cloudname) {
    return client.url(publicId, {cloud_name: cloudname});
}