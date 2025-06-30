interface Course {
  title: string
  description: string
  image_url: string
  type: string
  level: string
  rating: number
  reviews: number
  price: number
}

interface Role {
  title: string
  icon: string
  description: string
  about: string
  responsibilities: string[]
  tools: string[]
  courses: Course[]
}

export type { Role, Course }
