import { mediaLibraryHost } from 'config/dotenv'

export const getMediaUrl = (url: string): string => `${mediaLibraryHost}${url}`
