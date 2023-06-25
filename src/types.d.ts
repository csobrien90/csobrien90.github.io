import Interests from "./components/Interests";

export interface InterestCardProps {
	data: Interest
}

export interface Interest {
	title: string
	description: string
	imageSrc: string
	imageAlt: string
	link: string
}

export interface ContactFormData {
	name: string
	email: string
	subject: string
	message: string
}

export interface ContactFormLambdaResponse {
	status: 200 | 500
	message: string 
}