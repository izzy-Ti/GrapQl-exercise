export interface Client {
    name: string
    id: number
    phone: string
    email: string
}
export interface GetClientData {
    clients: Client[]
}

export interface Project {
    name: string
    status: string
    id: number
    description: string
    client: Client
}

export interface GetProjectData {
    projects: Project[]
}

export interface ButtonProps {
    label: string
    action?: () => void
}
