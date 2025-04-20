"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

interface ContentProviderProps {
	children: ReactNode;
}

// Creating a context for content with default value as null
const ContentContext = createContext<any | null>(null);

// ContentProvider component to fetch and provide content to the application
export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
	const [content, setContent] = useState<any | null>(null);

	useEffect(() => {
		const fetchContent = async () => {
			try {
				// Fetch content from the API
				const res = await axios.get('/api/content');
				const data: any = res.data;
				setContent(data);
			} catch (error) {
				console.error('Error fetching content:', error);
			}
		};

		fetchContent();
	}, []);

	return (
		<ContentContext.Provider value={content}>
			{children}
		</ContentContext.Provider>
	);
};

// Custom hook to use the content context
export const useContent = () => {
	return useContext(ContentContext);
};
