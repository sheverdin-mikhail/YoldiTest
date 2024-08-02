import { Image } from '@/entities/image'


export interface Account {
    name: string
    email: string
    slug: string
    image?: Image
    cover?: Image
    description?: string
}


