import { Image } from 'react-native';

import unknownArtistImage from '../../assets/images/unknown_artist.png';
import unknownAlbumImage from '../../assets/images/unknown_track.png';

export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImage).uri;
export const unknownAlbumImageUri = Image.resolveAssetSource(unknownAlbumImage).uri;
