import { SafeResourceUrl } from '@angular/platform-browser';

export interface INgxGalleryImage {
    small?: string | SafeResourceUrl;
    medium?: string | SafeResourceUrl;
    big?: string | SafeResourceUrl;
    description?: string;
    url?: string;
    label?: string;
    mimeType?: string;
}

export class NgxGalleryImage implements INgxGalleryImage {
    small?: string | SafeResourceUrl;
    medium?: string | SafeResourceUrl;
    big?: string | SafeResourceUrl;
    description?: string;
    url?: string;
    label?: string;
    mimeType?: string = "image/jpeg";

    constructor(obj: INgxGalleryImage) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.label = obj.label;
        this.mimeType = obj.mimeType;
    }
}
